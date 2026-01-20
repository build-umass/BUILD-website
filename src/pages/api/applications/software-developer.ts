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
        'projectExperience',
        'technologyToLearn',
        'confidenceGit',
        'confidenceCloud',
        'confidenceDatabase',
      ];

      for (const field of requiredFields) {
        if (!data[field] && data[field] !== 0 && data[field] !== false) {
          return res
            .status(400)
            .json({ error: `Missing required field: ${field}` });
        }
      }

      // Create the application
      const application = await prisma.softwareDeveloper.create({
        data: {
          fullName: data.fullName,
          email: data.email,
          graduatingYear: parseInt(data.graduatingYear),
          majors: data.majors,
          minors: data.minors || null,
          currentCourses: data.currentCourses || null,
          github: data.github || null,
          linkedIn: data.linkedIn || null,
          resumeLink: data.resumeLink,
          hoursPerWeek: parseInt(data.hoursPerWeek),
          availability: data.availability,
          previouslyApplied:
            data.previouslyApplied === true ||
            data.previouslyApplied === 'true',
          previousApplicationDate: data.previousApplicationDate || null,
          whyBuild: data.whyBuild,
          projectExperience: data.projectExperience,
          technologyToLearn: data.technologyToLearn,
          skillJava: data.skillJava || false,
          skillJavaScript: data.skillJavaScript || false,
          skillTypeScript: data.skillTypeScript || false,
          skillPython: data.skillPython || false,
          skillHTML: data.skillHTML || false,
          skillCSS: data.skillCSS || false,
          skillExpressJS: data.skillExpressJS || false,
          skillReactJS: data.skillReactJS || false,
          skillNodeJS: data.skillNodeJS || false,
          skillSQL: data.skillSQL || false,
          skillDjango: data.skillDjango || false,
          skillMongoDB: data.skillMongoDB || false,
          skillReactNative: data.skillReactNative || false,
          skillReact: data.skillReact || false,
          skillSwift: data.skillSwift || false,
          skillJavaKotlin: data.skillJavaKotlin || false,
          skillDartFlutter: data.skillDartFlutter || false,
          confidenceGit: parseInt(data.confidenceGit),
          confidenceCloud: parseInt(data.confidenceCloud),
          confidenceDatabase: parseInt(data.confidenceDatabase),
        },
      });

      return res.status(201).json({ success: true, id: application.id });
    } catch (error: any) {
      console.error('Error creating software developer application:', error);

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
