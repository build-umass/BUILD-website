import React, { useState } from 'react';
import Image from 'next/image';
import JumbotronHeader from '../components/JumbotronHeader';
import ProjectCard from '../components/ProjectCard';

interface ProjectMember {
  name: string;
  role?: string;
}

interface ProjectData {
  id: string | number;
  title: string;
  description: string;
  image_url: string;
  project_lead: ProjectMember[];
  sdes: ProjectMember[];
  product_managers: ProjectMember[];
  project_url?: string;
  category: string;
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Sample project data - in a real app, this would come from an API
  const projects: ProjectData[] = [
    {
      id: 1,
      title: 'UMass Student Portal',
      description:
        'A comprehensive student portal that provides access to academic records, course registration, and campus services. Built with React and Node.js, this platform serves over 30,000 students with real-time data synchronization and mobile-responsive design.',
      image_url: '/images/projects/CampusConnectPhoto.png',
      project_lead: [{ name: 'Sarah Chen', role: 'Technical Lead' }],
      sdes: [
        { name: 'Alex Rodriguez', role: 'Frontend Developer' },
        { name: 'Emily Johnson', role: 'Backend Developer' },
        { name: 'David Kim', role: 'DevOps Engineer' },
      ],
      product_managers: [{ name: 'Maria Garcia', role: 'Product Manager' }],
      project_url: 'https://studentportal.umass.edu',
      category: 'Web Development',
    },
    {
      id: 2,
      title: 'Fitness Tracker App',
      description:
        'A mobile application that helps students track their fitness goals, connect with workout buddies, and access campus fitness facilities. Features include workout logging, progress tracking, and social features for motivation.',
      image_url: '/images/projects/UMassFitness_S23.png',
      project_lead: [{ name: 'James Wilson', role: 'Technical Lead' }],
      sdes: [
        { name: 'Lisa Park', role: 'Mobile Developer' },
        { name: 'Michael Brown', role: 'Backend Developer' },
      ],
      product_managers: [{ name: 'Jennifer Lee', role: 'Product Manager' }],
      category: 'Mobile Development',
    },
    {
      id: 3,
      title: 'AI Student Assistant',
      description:
        'An intelligent chatbot that helps students with academic questions, course recommendations, and campus navigation. Built using natural language processing and machine learning to provide personalized assistance 24/7.',
      image_url: '/images/projects/AIS_S23.png',
      project_lead: [{ name: 'Ryan Thompson', role: 'AI Lead' }],
      sdes: [
        { name: 'Sophia Chen', role: 'ML Engineer' },
        { name: 'Kevin Zhang', role: 'Backend Developer' },
        { name: 'Amanda Davis', role: 'Frontend Developer' },
      ],
      product_managers: [{ name: 'Robert Martinez', role: 'Product Manager' }],
      category: 'AI/ML',
    },
    {
      id: 4,
      title: 'Event Management System',
      description:
        'A comprehensive platform for managing campus events, including registration, ticketing, and attendee management. Features real-time updates, payment processing, and analytics for event organizers.',
      image_url: '/images/projects/IUCG_S23.png',
      project_lead: [{ name: 'Taylor Swift', role: 'Technical Lead' }],
      sdes: [
        { name: 'Chris Anderson', role: 'Full Stack Developer' },
        { name: 'Rachel Green', role: 'Frontend Developer' },
      ],
      product_managers: [{ name: 'Mark Johnson', role: 'Product Manager' }],
      category: 'Web Development',
    },
    {
      id: 5,
      title: 'Sustainability Dashboard',
      description:
        'A data visualization platform that tracks campus sustainability metrics, including energy usage, waste reduction, and carbon footprint. Helps the university make data-driven decisions for environmental initiatives.',
      image_url: '/images/projects/SAS_S23.png',
      project_lead: [{ name: 'Jordan Smith', role: 'Data Lead' }],
      sdes: [
        { name: 'Alex Morgan', role: 'Data Engineer' },
        { name: 'Casey White', role: 'Frontend Developer' },
      ],
      product_managers: [{ name: 'Sam Taylor', role: 'Product Manager' }],
      category: 'Data Analytics',
    },
    {
      id: 6,
      title: 'Student Housing Platform',
      description:
        'A platform that connects students with housing options, roommates, and rental services. Features include property listings, roommate matching, and secure payment processing for off-campus housing.',
      image_url: '/images/projects/StudentBridges_S22.png',
      project_lead: [{ name: 'Morgan Lee', role: 'Technical Lead' }],
      sdes: [
        { name: 'Drew Johnson', role: 'Full Stack Developer' },
        { name: 'Casey Brown', role: 'Backend Developer' },
      ],
      product_managers: [{ name: 'Jordan Davis', role: 'Product Manager' }],
      category: 'Web Development',
    },
  ];

  const categories = [
    'All',
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] bg-gradient-to-br from-red-900 via-red-700 to-red-600 flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/square-pattern.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <JumbotronHeader
          title="Our Projects"
          subtitle="Innovative software solutions built by talented students for real-world impact"
        />
      </div>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-montserrat font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} projectData={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg font-source-sans">
                No projects found in the selected category.
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-montserrat text-gray-800 mb-4">
              Project Impact
            </h2>
            <p className="text-xl text-gray-600 font-source-sans max-w-3xl mx-auto">
              Our projects have made a significant impact on the UMass community
              and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold font-montserrat text-red-600 mb-2">
                50+
              </div>
              <div className="text-gray-600 font-source-sans">
                Projects Completed
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold font-montserrat text-red-600 mb-2">
                30K+
              </div>
              <div className="text-gray-600 font-source-sans">
                Users Impacted
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold font-montserrat text-red-600 mb-2">
                100+
              </div>
              <div className="text-gray-600 font-source-sans">Team Members</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold font-montserrat text-red-600 mb-2">
                15+
              </div>
              <div className="text-gray-600 font-source-sans">
                Client Organizations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-montserrat text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-white font-source-sans mb-8 max-w-3xl mx-auto">
            Let's work together to bring your ideas to life. We're always
            excited to take on new challenges and create innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-red-600 font-montserrat font-bold py-3 px-8 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors"
            >
              Start a Project
            </a>
            <a
              href="/apply"
              className="border-2 border-white text-white font-montserrat font-bold py-3 px-8 rounded-md hover:bg-white hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
