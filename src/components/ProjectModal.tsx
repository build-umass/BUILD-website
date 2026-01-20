'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { ProjectData } from '@/content/projects';

interface ProjectModalProps {
  show: boolean;
  onHide: () => void;
  projectData: ProjectData;
}

export default function ProjectModal({
  show,
  onHide,
  projectData,
}: ProjectModalProps) {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [show]);

  if (!show) return null;

  const imageUrl =
    projectData.image_url.length !== 0
      ? projectData.image_url
      : '/images/square-pattern.svg';

  const hasMembers =
    projectData.project_lead.length !== 0 ||
    projectData.sdes.length !== 0 ||
    projectData.product_managers.length !== 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onHide}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h4 className="text-2xl font-bold font-montserrat text-gray-700 flex-1 text-center">
            {projectData.title}
          </h4>
          <button
            onClick={onHide}
            className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto">
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={imageUrl}
              alt={projectData.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6">
            {/* Members section */}
            {hasMembers && (
              <section className="mb-6">
                {projectData.project_lead.length !== 0 && (
                  <div className="mb-3">
                    <span className="font-bold font-montserrat text-gray-700">
                      Project Lead:{' '}
                    </span>
                    <span className="text-gray-600">
                      {projectData.project_lead
                        .map((member) => member.name)
                        .join(', ')}
                    </span>
                  </div>
                )}
                {projectData.sdes.length !== 0 && (
                  <div className="mb-3">
                    <span className="font-bold font-montserrat text-gray-700">
                      Software Developer{projectData.sdes.length > 1 ? 's' : ''}
                      :{' '}
                    </span>
                    <span className="text-gray-600">
                      {projectData.sdes.map((member) => member.name).join(', ')}
                    </span>
                  </div>
                )}
                {projectData.product_managers.length !== 0 && (
                  <div className="mb-3">
                    <span className="font-bold font-montserrat text-gray-700">
                      Product Manager
                      {projectData.product_managers.length > 1 ? 's' : ''}:{' '}
                    </span>
                    <span className="text-gray-600">
                      {projectData.product_managers
                        .map((member) => member.name)
                        .join(', ')}
                    </span>
                  </div>
                )}
                {projectData.project_url && (
                  <div className="mb-3">
                    <span className="font-bold font-montserrat text-gray-700">
                      Project Link:{' '}
                    </span>
                    <a
                      href={projectData.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:underline break-all"
                    >
                      {projectData.project_url}
                    </a>
                  </div>
                )}
              </section>
            )}

            {/* Description */}
            <section>
              {projectData.description
                .split('. ')
                .map((sentence, index, array) => (
                  <p key={index} className="text-gray-600 leading-relaxed mb-3">
                    {sentence}
                    {index !== array.length - 1 && '.'}
                  </p>
                ))}
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-center p-6 border-t border-gray-200">
          <button
            onClick={onHide}
            className="bg-red-600 text-white font-montserrat font-bold py-2 px-6 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
