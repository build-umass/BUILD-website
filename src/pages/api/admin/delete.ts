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

  if (req.method === 'DELETE') {
    try {
      const { type, id, deleteAll } = req.body;

      if (!type) {
        return res.status(400).json({ error: 'Type is required' });
      }

      const validTypes = ['waitlist', 'software_developer', 'product_manager'];
      if (!validTypes.includes(type)) {
        return res.status(400).json({ error: 'Invalid type' });
      }

      // Delete all records of a type
      if (deleteAll) {
        if (type === 'waitlist') {
          await prisma.waitlistMember.deleteMany({});
        } else if (type === 'software_developer') {
          await prisma.softwareDeveloper.deleteMany({});
        } else if (type === 'product_manager') {
          await prisma.productManager.deleteMany({});
        }
        return res
          .status(200)
          .json({ success: true, message: `All ${type} records deleted` });
      }

      // Delete single record
      if (!id) {
        return res
          .status(400)
          .json({ error: 'ID is required for single delete' });
      }

      if (type === 'waitlist') {
        await prisma.waitlistMember.delete({ where: { id } });
      } else if (type === 'software_developer') {
        await prisma.softwareDeveloper.delete({ where: { id } });
      } else if (type === 'product_manager') {
        await prisma.productManager.delete({ where: { id } });
      }

      return res.status(200).json({ success: true, message: 'Record deleted' });
    } catch (error: any) {
      console.error('Error deleting record:', error);

      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'Record not found' });
      }

      return res.status(500).json({ error: 'Failed to delete record' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
