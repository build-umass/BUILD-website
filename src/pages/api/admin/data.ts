import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import { prisma } from '../../../../database/db/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'GET') {
    try {
      const waitlistMembers = await prisma.waitlistMember.findMany({
        orderBy: { createdAt: 'desc' },
      });

      const softwareDevelopers = await prisma.softwareDeveloper.findMany({
        orderBy: { createdAt: 'desc' },
      });

      const productManagers = await prisma.productManager.findMany({
        orderBy: { createdAt: 'desc' },
      });

      return res.status(200).json({
        waitlist: waitlistMembers,
        softwareDevelopers,
        productManagers,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      return res.status(500).json({ error: 'Failed to fetch data' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
