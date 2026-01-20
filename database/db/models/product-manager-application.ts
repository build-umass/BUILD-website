import { prisma } from "../prisma";
import type { ProductManager } from "@prisma/client";

export type CreateProductManagerInput = {
  // Section 1
  fullName: string;
  email: string;
  graduatingYear: number;
  majors: string;
  minors?: string | null;
  currentCourses?: string | null;
  linkedIn?: string | null;
  resumeLink: string;
  hoursPerWeek: number;
  availability: string;
  previouslyApplied: boolean;
  previousApplicationDate?: string | null;

  // Section 2
  whyBuild: string;
  leadershipExperience: string;
  excitingTechnology: string;
};

export async function createProductManager(
  input: CreateProductManagerInput,
): Promise<ProductManager> {
  return prisma.productManager.create({ data: input });
}

export async function getProductManagerByEmail(
  email: string,
): Promise<ProductManager | null> {
  return prisma.productManager.findUnique({ where: { email } });
}

export async function listProductManagers(params?: {
  query?: string;
  graduatingYear?: number;
  take?: number;
  skip?: number;
  orderBy?: "createdAt" | "graduatingYear";
  order?: "asc" | "desc";
}) {
  const {
    query,
    graduatingYear,
    take = 50,
    skip = 0,
    orderBy = "createdAt",
    order = "desc",
  } = params || {};

  return prisma.productManager.findMany({
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
      ],
    },
    orderBy: { [orderBy]: order },
    take,
    skip,
  });
}

export async function updateProductManager(
  id: string,
  data: Partial<CreateProductManagerInput>,
): Promise<ProductManager> {
  return prisma.productManager.update({ where: { id }, data });
}

export async function deleteProductManager(
  id: string,
): Promise<ProductManager> {
  return prisma.productManager.delete({ where: { id } });
}
