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
    description: 'Welcome to BUILD UMass!'
  },
  { 
    name: 'About', 
    link: '/about',
    description: 'Learn about our mission, story, and team.',
    longName: 'About Us'
  },
  { 
    name: 'Services', 
    link: '/services',
    description: 'The services we provide to our community.',
    longName: 'Our Services'
  },
  { 
    name: 'Projects', 
    link: '/projects',
    description: 'Take a look through our past and present projects.',
    longName: 'Our Projects'
  },
  { 
    name: 'Apply', 
    link: '/apply',
    description: 'Join our team and help us make a difference.',
    longName: 'Join Us'
  },
  { 
    name: 'Contact', 
    link: '/contact',
    description: 'Get in touch with us.',
    longName: 'Contact Us'
  }
];

export const contactFormLink = 'https://forms.gle/contact-form';

export const content = {
  pages,
};
