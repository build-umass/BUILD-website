export type PageLink = {
  name: string;
  link?: string;
  description?: string;
  longName?: string;
};

export const pages: PageLink[] = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Projects', link: '/projects' },
];

export const contactFormLink = 'https://example.com/contact';
