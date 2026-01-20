import React from 'react';
import Image from 'next/image';

interface LookForCardProps {
  title: string;
  description: string;
  imgSrc: string;
}

export default function LookForCard({
  title,
  description,
  imgSrc,
}: LookForCardProps) {
  return (
    <div className="md:w-1/3">
      <div className="flex flex-col items-center text-center">
        <Image
          src={imgSrc}
          alt={title}
          width={300}
          height={150}
          className="max-h-36 mb-3.5 object-contain"
        />
        <h5 className="font-bold text-lg text-red-600 font-montserrat mb-2">
          {title}
        </h5>
        <p className="text-black text-opacity-65">{description}</p>
      </div>
    </div>
  );
}
