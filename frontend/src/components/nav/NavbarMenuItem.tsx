import React from 'react';
import { PageLink } from '../../content/nav';

interface NavbarMenuItemProps {
  page: PageLink;
}

export default function NavbarMenuItem({ page }: NavbarMenuItemProps) {
  return (
    <div className="rounded-md bg-black bg-opacity-10 cursor-pointer flex flex-row gap-3.5 overflow-hidden pt-2 pl-3">
      <div className="pt-1">
        <span className="text-white text-xl font-semibold">
          {page.longName ?? page.name}
        </span>
        {page.description && (
          <p className="text-white text-opacity-70 text-sm font-thin leading-relaxed">
            {page.description}
          </p>
        )}
      </div>
    </div>
  );
}
