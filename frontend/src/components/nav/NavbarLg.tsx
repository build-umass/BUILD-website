import React from 'react';
import Link from 'next/link';
import { PageLink } from '../../content/nav';

interface NavbarLgProps {
  pages: PageLink[];
}

export default function NavbarLg({ pages }: NavbarLgProps) {
  return (
    <nav className="w-full flex justify-between items-center py-5">
      <Link
        href="/"
        className="font-bold text-xl text-white font-montserrat hover:underline"
      >
        BUILD UMass
      </Link>

      <div className="flex items-center space-x-4">
        {pages.map((page) => (
          <div
            key={page.name}
            className="flex items-center justify-center mx-2 px-2"
          >
            <Link
              href={page.link || '#'}
              className="font-montserrat text-white no-underline hover:underline"
            >
              {page.name}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
