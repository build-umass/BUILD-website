'use client';

import React from 'react';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import NavbarLg from './NavbarLg';
import NavbarSm from './NavbarSm';
import { pages } from '../../content/nav';

export default function Navbar() {
  const { smAndDown } = useBreakpoint();

  return (
    <div className="absolute z-50 w-full">
      {smAndDown ? (
        <NavbarSm pages={pages} />
      ) : (
        <div className="container mx-auto">
          <NavbarLg pages={pages} />
        </div>
      )}
    </div>
  );
}
