import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { prisma } from "../../../../../backend/app/db/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (req.method === "GET") {
    try {
      const sdStatus = await prisma.applicationStatus.findUnique({
        where: { role: "software_developer" },
      });

      const pmStatus = await prisma.applicationStatus.findUnique({
        where: { role: "product_manager" },
      });

      // Initialize if not exists
      if (!sdStatus) {
        await prisma.applicationStatus.create({
          data: { role: "software_developer", isOpen: 0 },
        });
      }

      if (!pmStatus) {
        await prisma.applicationStatus.create({
          data: { role: "product_manager", isOpen: 0 },
        });
      }

      return res.status(200).json({
        softwareDeveloper: sdStatus?.isOpen === 1,
        productManager: pmStatus?.isOpen === 1,
      });
    } catch (error) {
      console.error("Error fetching status:", error);
      return res.status(500).json({ error: "Failed to fetch status" });
    }
  }

  if (req.method === "POST") {
    try {
      const { role, isOpen } = req.body;

      if (!role || (isOpen !== true && isOpen !== false)) {
        return res.status(400).json({ error: "Invalid request body" });
      }

      const validRoles = ["software_developer", "product_manager"];
      if (!validRoles.includes(role)) {
        return res.status(400).json({ error: "Invalid role" });
      }

      await prisma.applicationStatus.upsert({
        where: { role },
        update: { isOpen: isOpen ? 1 : 0 },
        create: { role, isOpen: isOpen ? 1 : 0 },
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error updating status:", error);
      return res.status(500).json({ error: "Failed to update status" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
