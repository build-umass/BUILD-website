import React, { useState } from 'react';
import Image from 'next/image';
import JumbotronHeader from '../components/JumbotronHeader';
import ApplicationCard from '../components/apply/ApplicationCard';
import LookForCard from '../components/apply/LookForCard';

interface FAQ {
  q: string;
  a: string;
}

export default function Apply() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Sample role data - in a real app, this would come from an API
  const roles = [
    {
      title: 'Software Developer',
      description:
        'Work on real-world projects using modern technologies like React, Node.js, and Python. Gain experience in full-stack development, API design, and database management.',
      applicationLink: 'https://forms.gle/software-dev-application',
      applicationOpen: true,
    },
    {
      title: 'Product Manager',
      description:
        'Lead project planning, coordinate with clients, and ensure successful project delivery. Develop skills in project management, client communication, and strategic thinking.',
      applicationLink: 'https://forms.gle/product-manager-application',
      applicationOpen: true,
    },
    {
      title: 'UI/UX Designer',
      description:
        'Create intuitive and beautiful user interfaces. Work with design tools like Figma, conduct user research, and collaborate with developers to bring designs to life.',
      applicationLink: 'https://forms.gle/ux-designer-application',
      applicationOpen: false,
    },
    {
      title: 'DevOps Engineer',
      description:
        'Manage deployment pipelines, cloud infrastructure, and monitoring systems. Work with tools like Docker, AWS, and CI/CD pipelines to ensure reliable software delivery.',
      applicationLink: 'https://forms.gle/devops-application',
      applicationOpen: true,
    },
  ];

  const lookingFor = [
    {
      title: 'Technical Skills',
      description:
        'Programming experience in any language, familiarity with web technologies, or willingness to learn',
      imgSrc: '/images/illustrations/data.svg',
    },
    {
      title: 'Team Player',
      description:
        'Ability to collaborate effectively, communicate clearly, and contribute to a positive team environment',
      imgSrc: '/images/illustrations/teamwork.svg',
    },
    {
      title: 'Passion for Learning',
      description:
        'Eagerness to learn new technologies, take on challenges, and grow as a developer',
      imgSrc: '/images/illustrations/growth.svg',
    },
  ];

  const faqs: FAQ[] = [
    {
      q: 'What experience level is required to join BUILD?',
      a: "We welcome students of all experience levels! While some programming experience is helpful, we're more interested in your passion for learning and willingness to contribute to the team.",
    },
    {
      q: 'How much time commitment is expected?',
      a: "Most members spend 5-10 hours per week on BUILD projects. We understand you're a student first, so we're flexible with scheduling and workload.",
    },
    {
      q: 'What technologies do you work with?',
      a: 'We work with a variety of modern technologies including React, Node.js, Python, PostgreSQL, AWS, and more. We also provide learning resources and mentorship to help you grow.',
    },
    {
      q: 'Do I need to be a Computer Science major?',
      a: 'Not at all! We have members from various majors including engineering, business, and liberal arts. What matters most is your interest in technology and willingness to learn.',
    },
    {
      q: 'How are projects assigned?',
      a: 'Projects are assigned based on your interests, skills, and availability. We try to match members with projects that align with their learning goals and career aspirations.',
    },
    {
      q: 'What happens after I apply?',
      a: "After reviewing your application, we'll invite qualified candidates for a brief interview. This is a casual conversation to learn more about your interests and answer any questions you have.",
    },
  ];

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
          title="Join BUILD UMass"
          subtitle="Be part of a community that builds innovative software solutions and develops professional skills"
        />
      </div>

      {/* What We Look For Section */}
      <section id="Roles" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat text-gray-800 mb-4">
              What We Look For
            </h2>
            <p className="text-xl text-gray-600 font-source-sans max-w-3xl mx-auto">
              We're looking for passionate students who want to grow as
              developers and make an impact
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {lookingFor.map((item, index) => (
              <LookForCard
                key={index}
                title={item.title}
                description={item.description}
                imgSrc={item.imgSrc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Available Positions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat text-gray-800 mb-4">
              Available Positions
            </h2>
            <p className="text-xl text-gray-600 font-source-sans max-w-3xl mx-auto">
              Join our team in one of these exciting roles. Applications are
              reviewed on a rolling basis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roles.map((role, index) => (
              <ApplicationCard
                key={index}
                title={role.title}
                description={role.description}
                applicationLink={role.applicationLink}
                applicationOpen={role.applicationOpen}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat text-gray-800 mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-600 font-source-sans max-w-3xl mx-auto">
              Our application process is designed to be straightforward and
              stress-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-3">
                Submit Application
              </h3>
              <p className="text-gray-600 font-source-sans">
                Fill out our online application form with your basic information
                and interests.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-3">
                Interview
              </h3>
              <p className="text-gray-600 font-source-sans">
                Have a casual conversation with our team to learn more about
                BUILD and your interests.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-3">
                Join the Team
              </h3>
              <p className="text-gray-600 font-source-sans">
                Start working on real projects and become part of our amazing
                community!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 font-source-sans max-w-3xl mx-auto">
              Have questions? We've got answers. If you don't see your question
              here, feel free to reach out!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full text-left bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold font-montserrat text-gray-800">
                      {faq.q}
                    </h3>
                    <div
                      className={`transform transition-transform duration-300 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                    >
                      <svg
                        className="w-6 h-6 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="bg-white p-6 rounded-lg shadow-sm border-t border-gray-200">
                    <p className="text-gray-600 font-source-sans leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-montserrat text-white mb-6">
            Ready to Apply?
          </h2>
          <p className="text-xl text-white font-source-sans mb-8 max-w-3xl mx-auto">
            Join our community of passionate developers and start building
            amazing software solutions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/general-application"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 font-montserrat font-bold py-3 px-8 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors"
            >
              Start Application
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white font-montserrat font-bold py-3 px-8 rounded-md hover:bg-white hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors"
            >
              Ask Questions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
