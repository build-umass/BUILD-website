import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function SoftwareDeveloperApplication() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    graduatingYear: '',
    majors: '',
    minors: '',
    currentCourses: '',
    github: '',
    linkedIn: '',
    resumeLink: '',
    hoursPerWeek: '',
    availability: '',
    previouslyApplied: false,
    previousApplicationDate: '',
    whyBuild: '',
    projectExperience: '',
    technologyToLearn: '',
    skillJava: false,
    skillJavaScript: false,
    skillTypeScript: false,
    skillPython: false,
    skillHTML: false,
    skillCSS: false,
    skillExpressJS: false,
    skillReactJS: false,
    skillNodeJS: false,
    skillSQL: false,
    skillDjango: false,
    skillMongoDB: false,
    skillReactNative: false,
    skillReact: false,
    skillSwift: false,
    skillJavaKotlin: false,
    skillDartFlutter: false,
    confidenceGit: '3',
    confidenceCloud: '3',
    confidenceDatabase: '3',
  });

  useEffect(() => {
    fetch('/api/applications/status')
      .then((res) => res.json())
      .then((data) => {
        setIsOpen(data.softwareDeveloper);
        setIsLoading(false);
        if (!data.softwareDeveloper) {
          setTimeout(() => router.push('/apply'), 2000);
        }
      })
      .catch((error) => {
        console.error('Error fetching status:', error);
        setIsLoading(false);
      });
  }, [router]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/applications/software-developer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Application submitted successfully!');
        router.push('/apply');
      } else {
        alert(data.error || 'Failed to submit application');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Failed to submit application. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!isOpen) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Applications Closed
          </h1>
          <p className="text-gray-600 mb-4">
            Software Developer applications are currently closed.
          </p>
          <p className="text-gray-500">Redirecting to applications page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-red-900 via-red-700 to-red-600 py-20">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/square-pattern.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4 font-montserrat">
            Software Developer Application
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          {/* Section 1: Basic Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-build-red-600 mb-6 font-montserrat">
              Basic Information
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-build-red-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-build-red-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Graduating Year *
                </label>
                <input
                  type="number"
                  name="graduatingYear"
                  value={formData.graduatingYear}
                  onChange={handleChange}
                  required
                  min="2026"
                  max="2030"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-build-red-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Major(s) *
                </label>
                <input
                  type="text"
                  name="majors"
                  value={formData.majors}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Computer Science, Informatics"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-build-red-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minor(s)
                </label>
                <input
                  type="text"
                  name="minors"
                  value={formData.minors}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-build-red-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Courses
                </label>
                <input
                  type="text"
                  name="currentCourses"
                  value={formData.currentCourses}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-build-red-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GitHub Profile
                </label>
                <input
                  type="url"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="https://github.com/yourusername"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-build-red-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-build-red-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resume Link *
                </label>
                <input
                  type="url"
                  name="resumeLink"
                  value={formData.resumeLink}
                  onChange={handleChange}
                  required
                  placeholder="https://drive.google.com/..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-build-red-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hours Per Week Available *
                </label>
                <select
                  name="hoursPerWeek"
                  value={formData.hoursPerWeek}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-build-red-600 focus:border-transparent"
                >
                  <option value="">Select hours</option>
                  <option value="1">1-2 hours</option>
                  <option value="2">3-4 hours</option>
                  <option value="3">5-6 hours</option>
                  <option value="4">7-8 hours</option>
                  <option value="5">9-10 hours</option>
                  <option value="6">10+ hours</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Availability (Days) *
                </label>
                <input
                  type="text"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Monday, Wednesday, Friday"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-build-red-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="previouslyApplied"
                    checked={formData.previouslyApplied}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">
                    I have previously applied to BUILD
                  </span>
                </label>
              </div>

              {formData.previouslyApplied && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    When did you previously apply?
                  </label>
                  <input
                    type="text"
                    name="previousApplicationDate"
                    value={formData.previousApplicationDate}
                    onChange={handleChange}
                    placeholder="e.g., Fall 2023"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-build-red-600 focus:border-transparent"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Section 2: Essays */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-build-red-600 mb-6 font-montserrat">
              Essays
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why are you interested in BUILD? (Max 300 words) *
                </label>
                <textarea
                  name="whyBuild"
                  value={formData.whyBuild}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-build-red-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Describe a project you&apos;ve worked on (Max 500 words) *
                </label>
                <textarea
                  name="projectExperience"
                  value={formData.projectExperience}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-build-red-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What technology would you like to learn? (Max 250 words) *
                </label>
                <textarea
                  name="technologyToLearn"
                  value={formData.technologyToLearn}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-build-red-600 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Skills */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-build-red-600 mb-6 font-montserrat">
              Technical Skills
            </h2>

            <p className="text-sm text-gray-600 mb-4">
              Select all languages/frameworks you are familiar with:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: 'skillJava', label: 'Java' },
                { name: 'skillJavaScript', label: 'JavaScript' },
                { name: 'skillTypeScript', label: 'TypeScript' },
                { name: 'skillPython', label: 'Python' },
                { name: 'skillHTML', label: 'HTML' },
                { name: 'skillCSS', label: 'CSS' },
                { name: 'skillExpressJS', label: 'Express.js' },
                { name: 'skillReactJS', label: 'React.js' },
                { name: 'skillNodeJS', label: 'Node.js' },
                { name: 'skillSQL', label: 'SQL' },
                { name: 'skillDjango', label: 'Django' },
                { name: 'skillMongoDB', label: 'MongoDB' },
                { name: 'skillReactNative', label: 'React Native' },
                { name: 'skillReact', label: 'React' },
                { name: 'skillSwift', label: 'Swift' },
                { name: 'skillJavaKotlin', label: 'Java/Kotlin' },
                { name: 'skillDartFlutter', label: 'Dart/Flutter' },
              ].map((skill) => (
                <label key={skill.name} className="flex items-center">
                  <input
                    type="checkbox"
                    name={skill.name}
                    checked={
                      formData[skill.name as keyof typeof formData] as boolean
                    }
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">{skill.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Section 4: Confidence Levels */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-build-red-600 mb-6 font-montserrat">
              Confidence Levels
            </h2>

            <p className="text-sm text-gray-600 mb-4">
              Rate your confidence (1 = Beginner, 5 = Expert):
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Git/Version Control *
                </label>
                <select
                  name="confidenceGit"
                  value={formData.confidenceGit}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-build-red-600 focus:border-transparent"
                >
                  <option value="1">1 - Beginner</option>
                  <option value="2">2 - Basic</option>
                  <option value="3">3 - Intermediate</option>
                  <option value="4">4 - Advanced</option>
                  <option value="5">5 - Expert</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cloud Services (GCP/Azure/AWS) *
                </label>
                <select
                  name="confidenceCloud"
                  value={formData.confidenceCloud}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-build-red-600 focus:border-transparent"
                >
                  <option value="1">1 - Beginner</option>
                  <option value="2">2 - Basic</option>
                  <option value="3">3 - Intermediate</option>
                  <option value="4">4 - Advanced</option>
                  <option value="5">5 - Expert</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Databases (PostgreSQL, MySQL, etc.) *
                </label>
                <select
                  name="confidenceDatabase"
                  value={formData.confidenceDatabase}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-build-red-600 focus:border-transparent"
                >
                  <option value="1">1 - Beginner</option>
                  <option value="2">2 - Basic</option>
                  <option value="3">3 - Intermediate</option>
                  <option value="4">4 - Advanced</option>
                  <option value="5">5 - Expert</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-build-red-600 text-white rounded-lg font-semibold hover:bg-build-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
