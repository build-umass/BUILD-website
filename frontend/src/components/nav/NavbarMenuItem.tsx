import React from 'react';

export default function NavbarMenuItem({
  title,
  desc,
}: {
  title?: string;
  desc?: string;
}) {
  return (
    <div>
      <strong>{title}</strong>
      <div>{desc}</div>
    </div>
  );
}
