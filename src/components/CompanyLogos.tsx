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
    <div className="flex justify-center items-center flex-wrap gap-8 md:gap-16 lg:gap-24">
      {logos.map((logo, index) => (
        <Image
          key={index}
          src={logoPath + logo.src}
          alt={logo.name}
          width={200}
          height={100}
          className="object-contain"
        />
      ))}
    </div>
  );
}
