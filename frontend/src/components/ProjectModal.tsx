import React from 'react';

export default function ProjectModal({ open }: { open?: boolean }) {
  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true">
      <p>Project modal</p>
    </div>
  );
}
