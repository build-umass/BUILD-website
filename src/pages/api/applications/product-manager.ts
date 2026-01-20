import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../../database/db/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const data = req.body;

      // Validate required fields
      const requiredFields = [
        'fullName',
        'email',
        'graduatingYear',
        'majors',
        'resumeLink',
        'hoursPerWeek',
        'availability',
        'previouslyApplied',
        'whyBuild',
        'leadershipExperience',
        'excitingTechnology',
      ];

      for (const field of requiredFields) {
        if (!data[field] && data[field] !== 0 && data[field] !== false) {
          return res
            .status(400)
            .json({ error: `Missing required field: ${field}` });
        }
      }

      // Create the application
      const application = await prisma.productManager.create({
        data: {
          fullName: data.fullName,
          email: data.email,
          graduatingYear: parseInt(data.graduatingYear),
          majors: data.majors,
          minors: data.minors || null,
          currentCourses: data.currentCourses || null,
          linkedIn: data.linkedIn || null,
          resumeLink: data.resumeLink,
          hoursPerWeek: parseInt(data.hoursPerWeek),
          availability: data.availability,
          previouslyApplied:
            data.previouslyApplied === true ||
            data.previouslyApplied === 'true',
          previousApplicationDate: data.previousApplicationDate || null,
          whyBuild: data.whyBuild,
          leadershipExperience: data.leadershipExperience,
          excitingTechnology: data.excitingTechnology,
        },
      });

      return res.status(201).json({ success: true, id: application.id });
    } catch (error: any) {
      console.error('Error creating product manager application:', error);

      if (error.code === 'P2002') {
        return res
          .status(400)
          .json({ error: 'An application with this email already exists' });
      }

      return res.status(500).json({ error: 'Failed to submit application' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
