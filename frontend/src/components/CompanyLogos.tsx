import React from 'react';
import Image from 'next/image';

interface CompanyLogo {
  name: string;
  src: string;
}

export default function CompanyLogos() {
  const logoPath = '/images/logo/';

  const logos: CompanyLogo[] = [
    {
      name: 'Microsoft',
      src: 'msft.svg',
    },
    {
      name: 'Meta',
      src: 'meta.png',
    },
    {
      name: 'Google',
      src: 'google.svg',
    },
    {
      name: 'Amazon',
      src: 'Amazon_logo.svg',
    },
    {
      name: 'Uber',
      src: 'uber.svg',
    },
    {
      name: 'Cisco',
      src: 'cisco.svg',
    },
    {
      name: 'Visa',
      src: 'visa.png',
    },
    {
      name: 'Mastercard',
      src: 'mastercard.svg',
    },
    {
      name: 'Tanium',
      src: 'tanium.png',
    },
    {
      name: 'Fidelity',
      src: 'fidelity.svg',
    },
    {
      name: 'Pratt and Whitney',
      src: 'pratt-whitney.svg',
    },
    {
      name: 'Dell',
      src: 'dell.png',
    },
    {
      name: 'MassMutual',
      src: 'massmutual.svg',
    },
    {
      name: 'Liberty Mutual',
      src: 'liberty-mutual.png',
    },
    {
      name: 'Blue Cross Blue Shield',
      src: 'blue-cross-blue-shield.png',
    },
  ];

  return (
    <div className="relative">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/20 to-transparent rounded-3xl blur-2xl"></div>

      {/* Main grid container */}
      <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-10 md:gap-12 lg:gap-16 xl:gap-15 justify-items-center items-center">
        {logos.map((logo, index) => {
          // Calculate which row this logo is in for staggered effects
          const row = Math.floor(index / 5); // 5 columns consistently
          const isEvenRow = row % 2 === 0;

          return (
            <div
              key={index}
              className={`group relative transition-all duration-300 ease-out hover:z-10 ${
                !isEvenRow
                  ? 'transform translate-x-3 md:translate-x-4 lg:translate-x-5'
                  : ''
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
              }}
            >
              <Image
                src={logoPath + logo.src}
                alt={logo.name}
                width={100}
                height={100}
                className="object-contain transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 filter hover:brightness-110 select-none"
              />

              {/* Company name tooltip */}
            </div>
          );
        })}

        {/* Empty grid items to center the last row */}
        <div></div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
