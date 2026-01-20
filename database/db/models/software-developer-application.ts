// lib/db/softwareDeveloper.ts
import { prisma } from "../prisma";
import type { SoftwareDeveloper } from "@prisma/client";

export type CreateSoftwareDeveloperInput = {
  // Section 1
  fullName: string;
  email: string;
  graduatingYear: number;
  majors: string;
  minors?: string | null;
  currentCourses?: string | null;
  github?: string | null;
  linkedIn?: string | null;
  resumeLink: string;
  hoursPerWeek: number;
  availability: string;
  previouslyApplied: boolean;
  previousApplicationDate?: string | null;

  // Section 2
  whyBuild: string;
  projectExperience: string;
  technologyToLearn: string;

  // Section 3
  skillJava: boolean;
  skillJavaScript: boolean;
  skillTypeScript: boolean;
  skillPython: boolean;
  skillHTML: boolean;
  skillCSS: boolean;
  skillExpressJS: boolean;
  skillReactJS: boolean;
  skillNodeJS: boolean;
  skillSQL: boolean;
  skillDjango: boolean;
  skillMongoDB: boolean;
  skillReactNative: boolean;
  skillReact: boolean;
  skillSwift: boolean;
  skillJavaKotlin: boolean;
  skillDartFlutter: boolean;
  confidenceGit: number;
  confidenceCloud: number;
  confidenceDatabase: number;
};

export async function createSoftwareDeveloper(
  input: CreateSoftwareDeveloperInput,
): Promise<SoftwareDeveloper> {
  return prisma.softwareDeveloper.create({ data: input });
}

export async function getSoftwareDeveloperByEmail(
  email: string,
): Promise<SoftwareDeveloper | null> {
  return prisma.softwareDeveloper.findUnique({ where: { email } });
}

export async function listSoftwareDevelopers(params?: {
  query?: string;
  graduatingYear?: number;
  skills?: string[]; // e.g., ["React", "TypeScript"]
  minConfidenceGit?: number;
  take?: number;
  skip?: number;
  orderBy?: "createdAt" | "graduatingYear";
  order?: "asc" | "desc";
}) {
  const {
    query,
    graduatingYear,
    skills,
    minConfidenceGit,
    take = 50,
    skip = 0,
    orderBy = "createdAt",
    order = "desc",
  } = params || {};

  // Build skill filters
  const skillFilters =
    skills?.map((skill) => {
      const skillKey = `skill${skill}` as keyof SoftwareDeveloper;
      return { [skillKey]: true };
    }) || [];

  return prisma.softwareDeveloper.findMany({
    where: {
      AND: [
        query
          ? {
              OR: [
                { email: { contains: query, mode: "insensitive" } },
                { fullName: { contains: query, mode: "insensitive" } },
                { majors: { contains: query, mode: "insensitive" } },
              ],
            }
          : {},
        graduatingYear ? { graduatingYear } : {},
        minConfidenceGit ? { confidenceGit: { gte: minConfidenceGit } } : {},
        ...skillFilters,
      ],
    },
    orderBy: { [orderBy]: order },
    take,
    skip,
  });
}

export async function updateSoftwareDeveloper(
  id: string,
  data: Partial<CreateSoftwareDeveloperInput>,
): Promise<SoftwareDeveloper> {
  return prisma.softwareDeveloper.update({ where: { id }, data });
}

export async function deleteSoftwareDeveloper(
  id: string,
): Promise<SoftwareDeveloper> {
  return prisma.softwareDeveloper.delete({ where: { id } });
}
