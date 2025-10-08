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

        <JumbotronHeader
          title="About BUILD UMass"
          subtitle="Empowering students through real-world software development experience"
        />
      </div>

      {/* Mission Section */}
      <section id="Mission" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold font-montserrat text-red-600 mb-2">
                    100+
                  </div>
                  <div className="text-gray-600 font-source-sans">
                    Active Members
                  </div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold font-montserrat text-red-600 mb-2">
                    50+
                  </div>
                  <div className="text-gray-600 font-source-sans">
                    Projects Completed
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/illustrations/mission.svg"
                alt="Our mission illustration"
                width={400}
                height={300}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="Story" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-montserrat text-gray-800 mb-4">
                Our Story
              </h2>
              <p className="text-xl text-gray-600 font-source-sans">
                How BUILD UMass became a cornerstone of student software
                development at UMass Amherst
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2019</span>
                  </div>
                  <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-2">
                    Founded
                  </h3>
                  <p className="text-gray-600 font-source-sans">
                    BUILD UMass was established by a group of passionate
                    computer science students who wanted to create opportunities
                    for hands-on learning.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2021</span>
                  </div>
                  <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-2">
                    Expansion
                  </h3>
                  <p className="text-gray-600 font-source-sans">
                    We expanded our services to include web development and tech
                    consulting, growing our team and impact significantly.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2024</span>
                  </div>
                  <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-2">
                    Today
                  </h3>
                  <p className="text-gray-600 font-source-sans">
                    We continue to grow, now working with major organizations
                    and helping students launch their careers in tech.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold font-montserrat text-gray-800 mb-4">
                  Our Impact
                </h3>
                <p className="text-gray-600 font-source-sans leading-relaxed mb-4">
                  Over the years, BUILD UMass has become more than just a
                  student organization. We've created a community where students
                  can grow professionally, learn from each other, and make
                  meaningful contributions to real-world projects.
                </p>
                <p className="text-gray-600 font-source-sans leading-relaxed">
                  Our alumni have gone on to work at top tech companies, start
                  their own businesses, and continue to give back to the
                  community. We're proud of the impact we've made and excited
                  for what the future holds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat text-gray-800 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 font-source-sans max-w-3xl mx-auto">
              The principles that guide everything we do at BUILD UMass
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="mb-6">
                <Image
                  src="/images/illustrations/passion.svg"
                  alt="Passion"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold font-montserrat text-red-600 mb-3">
                Passion
              </h3>
              <p className="text-gray-600 font-source-sans">
                We're driven by our love for technology and our desire to create
                meaningful solutions.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="mb-6">
                <Image
                  src="/images/illustrations/teamwork.svg"
                  alt="Collaboration"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold font-montserrat text-red-600 mb-3">
                Collaboration
              </h3>
              <p className="text-gray-600 font-source-sans">
                We believe the best solutions come from working together and
                learning from each other.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="mb-6">
                <Image
                  src="/images/illustrations/growth.svg"
                  alt="Growth"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold font-montserrat text-red-600 mb-3">
                Growth
              </h3>
              <p className="text-gray-600 font-source-sans">
                We're committed to continuous learning and helping our members
                develop new skills.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="mb-6">
                <Image
                  src="/images/illustrations/culture.svg"
                  alt="Excellence"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold font-montserrat text-red-600 mb-3">
                Excellence
              </h3>
              <p className="text-gray-600 font-source-sans">
                We strive for high-quality work and maintain professional
                standards in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat text-gray-800 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 font-source-sans max-w-3xl mx-auto">
              Meet the dedicated students who lead BUILD UMass and help shape
              our organization's future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4">
                <Image
                  src="/images/people/blank.png"
                  alt="President"
                  width={120}
                  height={120}
                  className="mx-auto rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-2">
                President
              </h3>
              <p className="text-gray-600 font-source-sans mb-4">
                Leads the organization's strategic direction and represents
                BUILD UMass to the university and external partners.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4">
                <Image
                  src="/images/people/blank.png"
                  alt="Technical Director"
                  width={120}
                  height={120}
                  className="mx-auto rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-2">
                Technical Director
              </h3>
              <p className="text-gray-600 font-source-sans mb-4">
                Oversees technical standards, code reviews, and ensures the
                quality of all our software solutions.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4">
                <Image
                  src="/images/people/blank.png"
                  alt="Project Manager"
                  width={120}
                  height={120}
                  className="mx-auto rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-2">
                Project Manager
              </h3>
              <p className="text-gray-600 font-source-sans mb-4">
                Coordinates project timelines, client communication, and ensures
                successful project delivery.
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
