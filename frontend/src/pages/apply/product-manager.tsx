import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function ProductManagerApplication() {
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
    linkedIn: '',
    resumeLink: '',
    hoursPerWeek: '',
    availability: '',
    previouslyApplied: false,
    previousApplicationDate: '',
    whyBuild: '',
    leadershipExperience: '',
    excitingTechnology: '',
  });

  useEffect(() => {
    fetch('/api/applications/status')
      .then(res => res.json())
      .then(data => {
        setIsOpen(data.productManager);
        setIsLoading(false);
        if (!data.productManager) {
          setTimeout(() => router.push('/apply'), 2000);
        }
      })
      .catch(error => {
        console.error('Error fetching status:', error);
        setIsLoading(false);
      });
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/applications/product-manager', {
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
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Applications Closed</h1>
          <p className="text-gray-600 mb-4">Product Manager applications are currently closed.</p>
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
            Product Manager Application
          </h1>
          <p className="text-xl text-white/90 font-source-sans">
            Join BUILD UMass as a Product Manager
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
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
                  min="2024"
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
                  placeholder="e.g., Business, Computer Science"
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
                  placeholder="Optional"
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
                  placeholder="Optional"
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
                  <span className="text-sm text-gray-700">I have previously applied to BUILD</span>
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
                  Why are you interested in BUILD? *
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
                  Describe a time you showed initiative or leadership *
                </label>
                <textarea
                  name="leadershipExperience"
                  value={formData.leadershipExperience}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-build-red-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What excites you about technology, product management, or design? *
                </label>
                <textarea
                  name="excitingTechnology"
                  value={formData.excitingTechnology}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-build-red-600 focus:border-transparent"
                />
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
