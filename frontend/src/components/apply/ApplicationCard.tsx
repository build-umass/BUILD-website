'use client';

import React from 'react';
import styles from './ApplicationCard.module.css';

interface ApplicationCardProps {
  title: string;
  description: string;
  applicationLink: string;
  applicationOpen: boolean;
}

export default function ApplicationCard({
  title,
  description,
  applicationLink,
  applicationOpen,
}: ApplicationCardProps) {
  const handleApply = () => {
    if (typeof window !== 'undefined') {
      window.open(applicationLink, '_blank');
    }
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg flex flex-col justify-between h-full">
      <div>
        <h4 className="font-bold text-xl text-red-600 font-montserrat mb-2">
          {title}
        </h4>
        <div className="text-gray-700 font-source-sans">{description}</div>
      </div>
      {applicationOpen && (
        <div className="flex items-center justify-center text-center mt-4">
          <button
            onClick={handleApply}
            className={styles['apply-btn']}
            aria-label={`Apply for ${title}`}
          >
            <div>
              <span>Apply</span>
              <span>Apply</span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
