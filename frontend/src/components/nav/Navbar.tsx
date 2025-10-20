'use client';

import React, { useState, useEffect } from 'react';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import NavbarLg from './NavbarLg';
import NavbarSm from './NavbarSm';
import { pages } from '../../content/nav';

export default function Navbar() {
  const { smAndDown } = useBreakpoint();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="absolute z-50 w-full">
        <div className="container mx-auto">
          <NavbarLg pages={pages} />
        </div>
      </div>
    );
  }
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
