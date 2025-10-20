'use client';

import React, { useEffect, useState } from 'react';
import { useOuterClick } from '../../hooks/useOuterClick';
import NavbarLink from './NavbarLink';
import NavbarMenuItem from './NavbarMenuItem';
import { PageLink } from '../../content/nav';
import styles from './NavbarMenu.module.css';

interface NavbarMenuProps {
  show: boolean;
  pages: PageLink[];
  close: () => void;
}

export default function NavbarMenu({ show, pages, close }: NavbarMenuProps) {
  const innerRef = useOuterClick<HTMLDivElement>(() => !show || close());
  const [rendering, setRendering] = useState(true);

  useEffect(() => {
    setRendering(false);
  }, []);

  if (rendering) {
    return null;
  }

  return (
    <>
      <div
        className={`${styles.menuContainer} ${show ? styles.menuVisible : styles.menuHidden} p-3`}
        ref={innerRef}
        onClick={close}
      >
        <div className={styles.circleDecoration}></div>

        <h1 className="text-white text-3xl font-bold font-montserrat mb-4">
          Browse BUILD
        </h1>

        <div className="flex flex-col gap-3">
          {pages.map((page, i) => (
            <div key={i}
            className="block bg-black/10 rounded-lg p-3 backdrop-blur-sm">
              <NavbarLink page={page} linkDisplay={page.name} />
              {page.description && (
                <div className="text-white text-sm opacity-80 ml-4 mt-1">
                  {page.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        className={`${styles.backgroundDarkener} ${show ? styles.darkenerVisible : styles.darkenerHidden}`}
        onClick={close}
        aria-hidden="true"
      />
    </>
  );
}
