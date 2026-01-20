// lib/db/waitlist.ts
import { prisma } from "../prisma";
import type { WaitlistMember } from "@prisma/client";

export type CreateWaitlistInput = {
  name: string;
  email: string;
};

export async function createWaitlistMember(
  input: CreateWaitlistInput,
): Promise<WaitlistMember> {
  return prisma.waitlistMember.create({ data: input });
}

export async function getWaitlistMemberByEmail(
  email: string,
): Promise<WaitlistMember | null> {
  return prisma.waitlistMember.findUnique({ where: { email } });
}

export async function listWaitlistMembers(params?: {
  take?: number;
  skip?: number;
}) {
  const { take = 100, skip = 0 } = params || {};

  return prisma.waitlistMember.findMany({
    orderBy: { createdAt: "desc" },
    take,
    skip,
  });
}

export async function deleteWaitlistMember(
  id: string,
): Promise<WaitlistMember> {
  return prisma.waitlistMember.delete({ where: { id } });
}
