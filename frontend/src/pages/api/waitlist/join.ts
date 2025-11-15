import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../backend/app/db/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { name, email } = req.body;

      // Validate required fields
      if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
      }

      // Create waitlist member
      const member = await prisma.waitlistMember.create({
        data: {
          name,
          email,
        },
      });

      return res.status(201).json({ success: true, id: member.id });
    } catch (error: any) {
      console.error("Error adding to waitlist:", error);
      
      if (error.code === 'P2002') {
        return res.status(400).json({ error: "This email is already on the waitlist" });
      }
      
      return res.status(500).json({ error: "Failed to join waitlist" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
