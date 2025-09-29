export type Role = {
  id: string;
  title: string;
  description: string;
  applicationLink: string;
  applicationOpen: boolean;
};

export const roles: Role[] = [
  {
    id: 'software-developer',
    title: 'Software Developer',
    description: 'Work on real-world projects using modern technologies like React, Node.js, and Python. Gain experience in full-stack development, API design, and database management.',
    applicationLink: 'https://forms.gle/software-dev-application',
    applicationOpen: true
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    description: 'Lead project planning, coordinate with clients, and ensure successful project delivery. Develop skills in project management, client communication, and strategic thinking.',
    applicationLink: 'https://forms.gle/product-manager-application',
    applicationOpen: true
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    description: 'Create intuitive and beautiful user interfaces. Work with design tools like Figma, conduct user research, and collaborate with developers to bring designs to life.',
    applicationLink: 'https://forms.gle/ux-designer-application',
    applicationOpen: false
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    description: 'Manage deployment pipelines, cloud infrastructure, and monitoring systems. Work with tools like Docker, AWS, and CI/CD pipelines to ensure reliable software delivery.',
    applicationLink: 'https://forms.gle/devops-application',
    applicationOpen: true
  }
];

export const lookingFor = [
  'Technical Skills',
  'Team Player',
  'Passion for Learning'
];

export const faqs: { q: string; a: string }[] = [
  {
    q: 'What experience level is required to join BUILD?',
    a: 'We welcome students of all experience levels! While some programming experience is helpful, we\'re more interested in your passion for learning and willingness to contribute to the team.'
  },
  {
    q: 'How much time commitment is expected?',
    a: 'Most members spend 5-10 hours per week on BUILD projects. We understand you\'re a student first, so we\'re flexible with scheduling and workload.'
  },
  {
    q: 'What technologies do you work with?',
    a: 'We work with a variety of modern technologies including React, Node.js, Python, PostgreSQL, AWS, and more. We also provide learning resources and mentorship to help you grow.'
  },
  {
    q: 'Do I need to be a Computer Science major?',
    a: 'Not at all! We have members from various majors including engineering, business, and liberal arts. What matters most is your interest in technology and willingness to learn.'
  },
  {
    q: 'How are projects assigned?',
    a: 'Projects are assigned based on your interests, skills, and availability. We try to match members with projects that align with their learning goals and career aspirations.'
  },
  {
    q: 'What happens after I apply?',
    a: 'After reviewing your application, we\'ll invite qualified candidates for a brief interview. This is a casual conversation to learn more about your interests and answer any questions you have.'
  }
];
