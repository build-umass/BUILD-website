import React from 'react';

interface JumbotronHeaderProps {
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

export default function JumbotronHeader({
  title,
  subtitle,
  actions,
}: JumbotronHeaderProps) {
  return (
    <div className="relative z-10 h-[500px] flex justify-center items-center">
      <div className="max-w-6xl w-[100%]">
        <div className="flex flex-col items-center text-center space-y-6">
          <div>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat">
              {title}
            </h1>
          </div>
          <div>
            <p className="text-white text-lg md:text-xl lg:text-2xl font-montserrat leading-relaxed">
              {subtitle}
            </p>
          </div>
          <div className="flex justify-center items-center">{actions}</div>
        </div>
      </div>
    </div>
  );
}
