import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../backend/app/db/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      let sdStatus = await prisma.applicationStatus.findUnique({
        where: { role: "software_developer" },
      });

      let pmStatus = await prisma.applicationStatus.findUnique({
        where: { role: "product_manager" },
      });

      // If not found, create default closed status
      if (!sdStatus) {
        sdStatus = await prisma.applicationStatus.create({
          data: { role: "software_developer", isOpen: 0 },
        });
      }

      if (!pmStatus) {
        pmStatus = await prisma.applicationStatus.create({
          data: { role: "product_manager", isOpen: 0 },
        });
      }

      return res.status(200).json({
        softwareDeveloper: sdStatus.isOpen === 1,
        productManager: pmStatus.isOpen === 1,
      });
    } catch (error) {
      console.error("Error fetching application status:", error);
      return res.status(500).json({ error: "Failed to fetch application status" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
