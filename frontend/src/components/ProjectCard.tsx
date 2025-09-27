import React from 'react';

type Project = {
  id?: string | number;
  title?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article>
      <h3>{project.title ?? 'Project'}</h3>
    </article>
  );
}
