import React from 'react';
import Link from 'next/link';
import { PageLink } from '../../content/nav';

interface NavbarLinkProps {
  page: PageLink;
  linkDisplay?: string;
}

export default function NavbarLink({ page, linkDisplay }: NavbarLinkProps) {
  const isExternal = page.link?.startsWith('http') ?? false;
  const displayText = linkDisplay || page.name;

  if (isExternal) {
    return (
      <a
        href={page.link}
        target="_blank"
        rel="noreferrer noopener"
        className="font-montserrat text-white no-underline hover:underline"
      >
        {displayText}
      </a>
    );
  }

  return (
    <Link
      href={page.link || '#'}
      className="font-montserrat text-white no-underline hover:underline"
    >
      {displayText}
    </Link>
  );
}
