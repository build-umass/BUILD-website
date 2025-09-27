import React from 'react';

type Props = {
  title?: string;
  subtitle?: string;
};

export default function JumbotronHeader({ title, subtitle }: Props) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}
