import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import JumbotronHeader from '../components/JumbotronHeader';
import CompanyLogos from '../components/CompanyLogos';
import JoinUsHero from '../components/JoinUsHero';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-red-900 via-red-700 to-red-600 flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/square-pattern.svg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        <JumbotronHeader
          title="BUILD UMass"
          subtitle="Building innovative software solutions for the University of Massachusetts and beyond"
          actions={
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/projects">
                <button className="bg-white text-red-600 font-montserrat font-bold py-3 px-8 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300 hover:px-10">
                  View Our Work
                </button>
              </Link>
              <Link href="/apply">
                <button className="border-2 border-white text-white font-montserrat font-bold py-3 px-8 rounded-md hover:bg-white hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300">
                  Join Our Team
                </button>
              </Link>
            </div>
          }
        />
      </div>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 font-source-sans max-w-3xl mx-auto">
              We provide comprehensive software development services to help
              organizations achieve their digital goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Software Development */}
            <div className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <Image
                  src="/images/illustrations/software-dev.svg"
                  alt="Software Development"
                  width={120}
                  height={120}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold font-montserrat text-red-600 mb-4">
                Software Development
              </h3>
              <p className="text-gray-600 font-source-sans leading-relaxed">
                Custom software solutions built with modern technologies and
                best practices to meet your specific business needs.
              </p>
            </div>

            {/* Web Development */}
            <div className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <Image
                  src="/images/illustrations/web-dev.svg"
                  alt="Web Development"
                  width={120}
                  height={120}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold font-montserrat text-red-600 mb-4">
                Web Development
              </h3>
              <p className="text-gray-600 font-source-sans leading-relaxed">
                Responsive, accessible, and performant web applications that
                deliver exceptional user experiences.
              </p>
            </div>

            {/* Tech Consulting */}
            <div className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <Image
                  src="/images/illustrations/questions.svg"
                  alt="Tech Consulting"
                  width={120}
                  height={120}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold font-montserrat text-red-600 mb-4">
                Tech Consulting
              </h3>
              <p className="text-gray-600 font-source-sans leading-relaxed">
                Strategic technology guidance to help you make informed
                decisions and optimize your digital infrastructure.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <button className="bg-red-600 text-white font-montserrat font-bold py-3 px-8 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors">
                Learn More About Our Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-montserrat text-gray-800 mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-lg text-gray-600 font-source-sans">
              We're proud to work with industry leaders and innovative companies
            </p>
          </div>
          <CompanyLogos />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold font-montserrat text-red-600 mb-2">
                50+
              </div>
              <div className="text-gray-600 font-source-sans">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold font-montserrat text-red-600 mb-2">
                100+
              </div>
              <div className="text-gray-600 font-source-sans">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-montserrat text-red-600 mb-2">
                5+
              </div>
              <div className="text-gray-600 font-source-sans">
                Years of Experience
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold font-montserrat text-red-600 mb-2">
                25+
              </div>
              <div className="text-gray-600 font-source-sans">
                Client Organizations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Hero */}
      <JoinUsHero />

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-montserrat text-gray-800 mb-6">
                About BUILD UMass
              </h2>
              <p className="text-lg text-gray-600 font-source-sans leading-relaxed mb-6">
                BUILD UMass is a student-run software development organization
                at the University of Massachusetts Amherst. We connect talented
                students with real-world projects, helping them develop
                professional skills while delivering high-quality software
                solutions to our clients.
              </p>
              <p className="text-lg text-gray-600 font-source-sans leading-relaxed mb-8">
                Our mission is to bridge the gap between academic learning and
                industry practice, creating opportunities for students to work
                on meaningful projects while providing organizations with
                cost-effective, innovative solutions.
              </p>
              <Link href="/about">
                <button className="bg-red-600 text-white font-montserrat font-bold py-3 px-8 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors">
                  Learn More About Us
                </button>
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/illustrations/teamwork.svg"
                alt="Team collaboration"
                width={400}
                height={300}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
