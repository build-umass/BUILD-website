export type PageLink = {
  name: string;
  link?: string;
  description?: string;
  longName?: string;
};

export const pages: PageLink[] = [
  { 
    name: 'Home', 
    link: '/',
    description: 'Learn about BUILD UMass and our mission'
  },
  { 
    name: 'About', 
    link: '/about',
    description: 'Our story, mission, and team',
    longName: 'About Us'
  },
  { 
    name: 'Services', 
    link: '/services',
    description: 'Software development, web development, and consulting',
    longName: 'Our Services'
  },
  { 
    name: 'Projects', 
    link: '/projects',
    description: 'See our portfolio of completed projects',
    longName: 'Our Projects'
  },
  { 
    name: 'Apply', 
    link: '/apply',
    description: 'Join our team and work on real projects',
    longName: 'Join Us'
  },
  { 
    name: 'Contact', 
    link: '/contact',
    description: 'Get in touch with us',
    longName: 'Contact Us'
  }
];

export const contactFormLink = 'https://forms.gle/contact-form';

export const content = {
  pages,
};
