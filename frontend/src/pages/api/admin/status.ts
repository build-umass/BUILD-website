import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

// This would typically be stored in a database
let applicationStatus = { isOpen: false };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (req.method === "GET") {
    return res.status(200).json(applicationStatus);
  }

  if (req.method === "POST") {
    const { isOpen } = req.body;
    applicationStatus.isOpen = isOpen;
    return res.status(200).json(applicationStatus);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
