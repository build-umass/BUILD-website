import { prisma } from "@/lib/prisma";
import type { User } from "@prisma/client";

export type CreateUserInput = {
    firstName: string;
    lastName: string;
    email: string;
    occupation: string;
    preferredName?: string | null;
    graduatingYear?: number | null;
    major?: string | null;
    company?: string | null;
    position?: string | null;
};

export async function createUser(input: CreateUserInput): Promise<User> {
    return prisma.user.create({ data: input });
}

export async function getUserByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { email } });
}

export async function listUsers(params?: {
    query?: string;
    occupation?: string;
    graduatingYear?: number;
    take?: number;
    skip?: number;
    orderBy?: "updatedAt" | "lastName";
    order?: "asc" | "desc";
}) {
    const {
        query,
        occupation,
        graduatingYear,
        take = 50,
        skip = 0,
        orderBy = "updatedAt",
        order = "desc",
    } = params || {};

    return prisma.user.findMany({
        where: {
            AND: [
                query
                    ? {
                        OR: [
                            { email: { contains: query, mode: "insensitive" } },
                            { firstName: { contains: query, mode: "insensitive" } },
                            { lastName: { contains: query, mode: "insensitive" } },
                            { company: { contains: query, mode: "insensitive" } },
                        ],
                    }
                    : {},
                occupation ? { occupation: { equals: occupation } } : {},
                typeof graduatingYear === "number" ? { graduatingYear } : {},
            ],
        },
        orderBy: { [orderBy]: order },
        take,
        skip,
    });
}

export async function updateUser(id: string, data: Partial<CreateUserInput>): Promise<User> {
    return prisma.user.update({ where: { id }, data });
}

export async function deleteUser(id: string): Promise<User> {
    return prisma.user.delete({ where: { id } });
}
