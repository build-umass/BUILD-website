import React from 'react';
import Image from 'next/image';
import JumbotronHeader from '../components/JumbotronHeader';

export default function About() {
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
        <div className="scale-75 origin-center w-full">
          <JumbotronHeader
            title="Gain Real-World Experience By Helping Others"
            subtitle="BUILD provides a venue for students to gain academic and practical knowledge about software development, web development, and tech consulting. We are BUILDING our community through the pro-bono services we offer to nonprofits, startups, and local businesses."
          />
        </div>
      </div>

      {/* Mission & Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 items-start">
            {/* Mission */}
            <div id="Mission" className="text-left max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold font-montserrat text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 font-source-sans leading-relaxed mb-6">
                BUILD UMass bridges the gap between academic learning and
                industry practice. We provide students with hands-on experience
                working on real software projects while delivering high-quality
                solutions to our clients.
              </p>
              <p className="text-lg text-gray-600 font-source-sans leading-relaxed mb-6">
                Our mission is to create a supportive environment where students
                can develop professional skills, build meaningful connections,
                and contribute to impactful projects that make a difference in
                the community.
              </p>
            </div>

            {/* Story */}
            <div id="Story" className="text-left max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold font-montserrat text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 font-source-sans mb-4">
                {new Date().getFullYear() - 2018} years ago CS students{' '}
                <a
                  href="https://www.linkedin.com/in/nilay18/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline"
                >
                  Nilay Sadavarte
                </a>{' '}
                and{' '}
                <a
                  href="https://www.linkedin.com/in/matthewpearce/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline"
                >
                  Matt Pearce
                </a>{' '}
                had an idea. They wanted to use their skills to help the
                community. They wanted to make a difference. They wanted to
                BUILD! And so, BUILD UMass was born. Since its inception, BUILD
                has had an impact on dozens of non-profits, charities, and
                student groups, while helping hundreds of students gain
                real-world experience in software development, product
                management, and consulting. We are proud of our accomplishments,
                but are always looking to do more. If you are an organization
                that could benefit from the services we provide, we would love
                to hear from you. If you are a student looking to gain
                real-world experience, we would love for you to be a part of the
                next chapter of our story.
              </p>
              <p className="text-lg text-gray-600 font-source-sans leading-relaxed">
                {/* Add your story content here */}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-montserrat text-white mb-6">
            Ready to Join Our Story?
          </h2>
          <p className="text-xl text-white font-source-sans mb-8 max-w-3xl mx-auto">
            Whether you're a student looking to gain real-world experience or an
            organization seeking innovative solutions, we'd love to hear from
            you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/apply"
              className="bg-white text-red-600 font-montserrat font-bold py-3 px-8 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors"
            >
              Join as a Student
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white font-montserrat font-bold py-3 px-8 rounded-md hover:bg-white hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors"
            >
              Partner with Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
