import React from 'react';

interface ClosedApplicationsCardProps {
  onJoinWaitlist: () => void;
}

export default function ClosedApplicationsCard({
  onJoinWaitlist,
}: ClosedApplicationsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-300">
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold font-montserrat text-gray-800">
            Applications Currently Closed
          </h3>
        </div>

        <p className="text-gray-600 font-source-sans mb-6 leading-relaxed">
          Thank you for your interest in BUILD UMass! We are not currently
          accepting new applications, but we encourage you to join our waitlist.
          We'll notify you as soon as applications reopen for the next
          recruitment cycle.
        </p>

        <button
          onClick={onJoinWaitlist}
          className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300"
        >
          Join Waitlist
        </button>
      </div>
    </div>
  );
}
