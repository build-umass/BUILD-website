'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import ProjectModal from './ProjectModal';
import styles from './ProjectCard.module.css';

interface ProjectMember {
  name: string;
  role?: string;
}

interface ProjectData {
  id?: string | number;
  title: string;
  description: string;
  image_url: string;
  project_lead: ProjectMember[];
  sdes: ProjectMember[];
  product_managers: ProjectMember[];
}

interface ProjectCardProps {
  projectData: ProjectData;
}

export default function ProjectCard({ projectData }: ProjectCardProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const [readMore, setReadMore] = useState(false);

  // Counting the members
  const projectLeadCount = projectData.project_lead.length !== 0 ? 1 : 0;
  const sdesCount = projectData.sdes.length;
  const productManagersCount = projectData.product_managers.length;
  const membersCount = projectLeadCount + sdesCount + productManagersCount;

  const imageUrl =
    projectData.image_url.length !== 0
      ? projectData.image_url
      : '/images/square-pattern.svg';

  const isLongTitle = projectData.title.length > 14;
  const lineClampClass = isLongTitle
    ? styles['line-clamp-3']
    : styles['line-clamp-4'];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-full flex flex-col">
      <div className="relative h-40 overflow-hidden">
        <Image
          src={imageUrl}
          alt={projectData.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-1">
        <div className="flex-1">
          <h5 className="text-xl font-bold font-montserrat text-gray-700 mb-2">
            {projectData.title}
          </h5>
          {membersCount !== 0 && (
            <h6 className="text-sm font-medium text-gray-500 mb-3">
              {membersCount} members
            </h6>
          )}
          <div
            ref={textRef}
            className={`text-gray-600 leading-relaxed ${lineClampClass}`}
          >
            <span>{projectData.description}</span>
          </div>
        </div>
        <button
          className="text-red-600 font-semibold mt-3 hover:underline cursor-pointer text-left"
          onClick={() => setReadMore(true)}
        >
          Read More
        </button>
      </div>
      <ProjectModal
        show={readMore}
        onHide={() => setReadMore(false)}
        projectData={projectData}
      />
    </div>
  );
}
