'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PageLink } from '../../content/nav';
import NavbarMenu from './NavbarMenu';

interface NavbarSmProps {
  pages: PageLink[];
}

export default function NavbarSm({ pages }: NavbarSmProps) {
  const [show, setShow] = useState(false);

  const close = () => setShow(false);
  const open = () => setShow(true);

  return (
    <>
      <nav className="w-full flex justify-between items-center py-5">
        <Link
          href="/"
          className="font-bold text-xl text-white font-montserrat hover:underline"
        >
          BUILD UMass
        </Link>

        <button
          onClick={open}
          className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded p-2"
          aria-label="Open navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      <NavbarMenu show={show} pages={pages} close={close} />
    </>
  );
}
