import React from 'react';
import Image from 'next/image';
import JumbotronHeader from '../components/JumbotronHeader';

export default function Services() {
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
          title="Our Services"
          subtitle="Comprehensive software development solutions tailored to your needs"
        />
      </div>

      {/* Software Development Section */}
      <section id="Software" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-montserrat text-gray-800 mb-6">
                Software Development
              </h2>
              <p className="text-lg text-gray-600 font-source-sans leading-relaxed mb-6">
                We build custom software solutions that solve real-world
                problems. Our development process combines modern technologies
                with proven methodologies to deliver robust, scalable
                applications.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold font-montserrat text-gray-800 mb-1">
                      Custom Application Development
                    </h3>
                    <p className="text-gray-600 font-source-sans">
                      Tailored solutions built from the ground up to meet your
                      specific requirements
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold font-montserrat text-gray-800 mb-1">
                      API Development & Integration
                    </h3>
                    <p className="text-gray-600 font-source-sans">
                      RESTful APIs and seamless integration with existing
                      systems
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold font-montserrat text-gray-800 mb-1">
                      Database Design & Management
                    </h3>
                    <p className="text-gray-600 font-source-sans">
                      Efficient data architecture and database optimization
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/illustrations/software-dev.svg"
                alt="Software Development"
                width={400}
                height={300}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <section id="Web" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/illustrations/web-dev.svg"
                alt="Web Development"
                width={400}
                height={300}
                className="max-w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold font-montserrat text-gray-800 mb-6">
                Web Development
              </h2>
              <p className="text-lg text-gray-600 font-source-sans leading-relaxed mb-6">
                Create stunning, responsive web applications that deliver
                exceptional user experiences. We specialize in modern frameworks
                and best practices for optimal performance and accessibility.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold font-montserrat text-gray-800 mb-1">
                      Responsive Web Design
                    </h3>
                    <p className="text-gray-600 font-source-sans">
                      Mobile-first designs that work perfectly on all devices
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold font-montserrat text-gray-800 mb-1">
                      Modern Frameworks
                    </h3>
                    <p className="text-gray-600 font-source-sans">
                      React, Next.js, and other cutting-edge technologies
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold font-montserrat text-gray-800 mb-1">
                      Performance Optimization
                    </h3>
                    <p className="text-gray-600 font-source-sans">
                      Fast loading times and optimal user experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Consulting Section */}
      <section id="Consulting" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-montserrat text-gray-800 mb-6">
                Tech Consulting
              </h2>
              <p className="text-lg text-gray-600 font-source-sans leading-relaxed mb-6">
                Get expert guidance on technology decisions and digital
                transformation. Our consulting services help you make informed
                choices and optimize your technology infrastructure.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold font-montserrat text-gray-800 mb-1">
                      Technology Strategy
                    </h3>
                    <p className="text-gray-600 font-source-sans">
                      Strategic planning and technology roadmap development
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold font-montserrat text-gray-800 mb-1">
                      Architecture Review
                    </h3>
                    <p className="text-gray-600 font-source-sans">
                      System architecture analysis and optimization
                      recommendations
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold font-montserrat text-gray-800 mb-1">
                      Digital Transformation
                    </h3>
                    <p className="text-gray-600 font-source-sans">
                      Guidance on modernizing legacy systems and processes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/illustrations/questions.svg"
                alt="Tech Consulting"
                width={400}
                height={300}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat text-gray-800 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 font-source-sans max-w-3xl mx-auto">
              We follow a structured approach to ensure successful project
              delivery and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-3">
                Discovery
              </h3>
              <p className="text-gray-600 font-source-sans">
                We start by understanding your needs, goals, and technical
                requirements through detailed consultation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-3">
                Planning
              </h3>
              <p className="text-gray-600 font-source-sans">
                We create a detailed project plan with timelines, milestones,
                and clear deliverables.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-3">
                Development
              </h3>
              <p className="text-gray-600 font-source-sans">
                Our team builds your solution using agile methodologies with
                regular progress updates.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-3">
                Delivery
              </h3>
              <p className="text-gray-600 font-source-sans">
                We deliver your solution with comprehensive testing,
                documentation, and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat text-gray-800 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 font-source-sans max-w-3xl mx-auto">
              We work with modern, proven technologies to build robust and
              scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 p-6 rounded-lg mb-3">
                <div className="text-2xl font-bold text-gray-800">React</div>
              </div>
              <p className="text-sm text-gray-600 font-source-sans">Frontend</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 p-6 rounded-lg mb-3">
                <div className="text-2xl font-bold text-gray-800">Node.js</div>
              </div>
              <p className="text-sm text-gray-600 font-source-sans">Backend</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 p-6 rounded-lg mb-3">
                <div className="text-2xl font-bold text-gray-800">Python</div>
              </div>
              <p className="text-sm text-gray-600 font-source-sans">Backend</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 p-6 rounded-lg mb-3">
                <div className="text-2xl font-bold text-gray-800">
                  PostgreSQL
                </div>
              </div>
              <p className="text-sm text-gray-600 font-source-sans">Database</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 p-6 rounded-lg mb-3">
                <div className="text-2xl font-bold text-gray-800">AWS</div>
              </div>
              <p className="text-sm text-gray-600 font-source-sans">Cloud</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 p-6 rounded-lg mb-3">
                <div className="text-2xl font-bold text-gray-800">Docker</div>
              </div>
              <p className="text-sm text-gray-600 font-source-sans">DevOps</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-montserrat text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white font-source-sans mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help bring your ideas to life with our
            comprehensive software development services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-red-600 font-montserrat font-bold py-3 px-8 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors"
            >
              Get Started
            </a>
            <a
              href="/projects"
              className="border-2 border-white text-white font-montserrat font-bold py-3 px-8 rounded-md hover:bg-white hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
