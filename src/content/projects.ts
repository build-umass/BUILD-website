interface ProjectMember {
  name: string;
  role?: string;
}

export interface ProjectData {
  id: string | number;
  title: string;
  description: string;
  image_url: string;
  project_lead: ProjectMember[];
  sdes: ProjectMember[];
  product_managers: ProjectMember[];
  project_url?: string;
  category: string;
  year: number;
}

export const projects: ProjectData[] = [
  {
    id: 18,
    title: 'UMass Photo',
    year: 2025,
    description:
      'Website for the UMass Photography for the e-board to manage membership, contests, photos, and blogs.',
    image_url: '/images/projects/umassphoto_S25.png',
    project_lead: [{ name: 'Maxwell Tang' }],
    sdes: [
      { name: 'Gordan Liu' },
      { name: 'John Ngo' },
      { name: 'Lance Cheng' },
      { name: 'Nathan Gelfand' },
      { name: 'Sue Gurung' },
      { name: 'Zhiyang Wen' },
    ],
    product_managers: [{ name: 'Jashika Kaur' }, { name: 'Michael Doyle' }],
    category: 'Web Development',
  },
  {
    id: 17,
    title: 'STEMPlore',
    year: 2025,
    description:
      'STEMPlore is an innovative platform that gamifies the process of learning STEM topics. We are developing an AI-powered tool that converts uploaded educational curricula from slide-based formats into structured, question-ready content for the platform. We use LLMs to parse the curriculum and generate high-quality, usable questions. We are also working on modernizing the website’s UI and improving overall usability and quality-of-life features. STEMplore is an innovative educational tool developed by STEM For Others, designed to revolutionize STEM education. STEMplore offers a gamified learning experience that combines interactive lessons and engaging challenges. Our platform covers a wide range of science, technology, engineering, and mathematics (STEM) subjects, making learning fun and engaging for students of all ages. STEMPLORE helps students build critical thinking skills and a deep understanding of STEM concepts through an immersive and enjoyable approach. Join STEMPLORE today and discover how STEM For Others is transforming education one game at a time.',
    image_url: '/images/projects/stemplore_S25.png',
    project_lead: [{ name: 'Shreyas Pedda' }],
    sdes: [
      { name: 'Junaid Pathan' },
      { name: 'Jennifer Ye' },
      { name: 'Armaan Nahata' },
      { name: 'Krish Arekar' },
    ],
    product_managers: [{ name: 'Urvi Gupta' }, { name: 'Duretti Hordofaa' }],
    project_url: 'https://www.stemplore.com/',
    category: 'Web Development',
  },
  {
    id: 16,
    title: 'Kapok',
    year: 2025,
    description:
      'Kapok is a disaster response app designed to enhance the efficiency and coordination of first responders in disaster-stricken areas. It facilitates communication among response teams, helping to identify critical locations such as transportation barriers, sites where aid has been distributed, and areas where public health actions (such as the delivery of medicines or water purification demonstrations) have taken place. Additionally, Kapok creates a comprehensive record of these actions, boosting team morale and providing a clear picture of accomplishments in the field. Kapok is to be built in Flutter with the Dart programming language, and its main dependency is Flutterflow. Project requires intermediate understanding of Dart and Flutter, along with a basic understanding of asynchronous database development. The frontend is done, with functionality for navigation completed and some model classes and async functions in place to facilitate backend development.',
    image_url: '/images/projects/kapok_S25.png',
    project_lead: [{ name: 'Shreyansh Misra' }],
    sdes: [
      { name: 'Brian Nguyen' },
      { name: 'Fuming Zhang' },
      { name: 'Kiran Balasundaram Kuppuraj' },
      { name: 'Dia Sutaria' },
      { name: 'Duc Nghiem' },
    ],
    product_managers: [{ name: 'Shriya Sanas' }, { name: 'Nitya Vobugari' }],
    project_url: 'https://github.com/ShreyanshMisra/Kapok',
    category: 'Mobile Development',
  },
  {
    id: 1,
    title: 'EliteCode',
    year: 2024,
    description:
      'EliteCode is a mobile app created to gamify technical interview preparation and polish programming principles.',
    image_url: '/images/projects/elitecode.png',
    project_lead: [{ name: 'Aryan Nair' }],
    sdes: [
      { name: 'Dorian B. Goldfajn' },
      { name: 'Tung Le' },
      { name: 'Shri Radhakrishnan' },
      { name: "Sean O'Dea" },
      { name: 'Ayomide Olubanwo' },
    ],
    product_managers: [{ name: 'Tom Solus' }, { name: 'Rishik Javawamy' }],
    project_url: 'https://elitecode.ai/',
    category: 'Mobile Development',
  },
  {
    id: 2,
    title: 'Small Acts for Sustainability',
    year: 2024,
    description: `Small Acts for Sustainability (SAS) is an Amherst-based nonprofit that does work in rural India to support women's health. SAS approached us to create a period-tracking app that supports the tracking and logging of menstrual cycle symptoms over time. The app is translated into English, Kannada and Hindi and is currently in a closed testing period as of our last handoff to SAS with the ultimate goal of publishing it on the Google Play and Apple storefronts. In 2024, SAS improved its design by creating images according to the client's specifications, and the project was officially handed off to the client.`,
    image_url: '/images/projects/SAS_S23.png',
    project_lead: [{ name: 'Abby Tran' }],
    sdes: [
      { name: 'Siddhartha Jaiswal' },
      { name: 'Vi Doan' },
      { name: 'Hayun Jung' },
      { name: 'Ruchi Gupta' },
      { name: 'Shreya Anand' },
    ],
    product_managers: [{ name: 'Anna Le' }, { name: 'Suhani Hingar' }],
    category: 'Mobile Development',
  },
  {
    id: 3,
    title: 'Pre-Law Club',
    year: 2024,
    description: 'Renovated the website for the UMass Amherst Pre-Law Club.',
    image_url: '/images/projects/PreLawClubPhoto.png',
    project_lead: [{ name: 'Saif Masoud' }],
    sdes: [
      { name: 'Jason Simmonds' },
      { name: 'Nathan Chen' },
      { name: 'Vinayak Rao' },
      { name: 'Ryan' },
      { name: 'Sagi' },
    ],

    product_managers: [
      { name: 'Kien Le' },
      { name: 'Gurleen Kaur' },
      { name: 'Phoebe Lo' },
    ],
    category: 'Web Development',
  },
  {
    id: 4,
    title: 'Amherst Ballet',
    year: 2024,
    description:
      'Renovated the website for Amherst Ballet, a ballet studio located in Amherst, Massachusetts (As the name suggests).',
    image_url: '/images/projects/AmherstBalletPhoto.png',
    project_lead: [{ name: 'Bao Dang' }],
    sdes: [
      { name: 'Samuel Sanchez' },
      { name: 'Wole Fabikun' },
      { name: 'Rishabh Devani' },
      { name: 'Mehek Shah' },
    ],
    product_managers: [
      { name: 'Tanishka Indorekar' },
      { name: 'Farhana Rahman' },
      { name: 'Ishita Kakkar' },
    ],
    project_url: 'https://amherstballet.org',
    category: 'Web Development',
  },
  {
    id: 5,
    title: 'Isenberg Undergraduate Consulting Group',
    year: 2024,
    description:
      'Developed a blog application for the Isenberg Undergraduate Consulting Group at UMass Amherst to post their business updates and insights on. It was developed using the MERN stack, and Figma for UI design.',
    image_url: '/images/projects/IUCGPhoto.png',
    project_lead: [{ name: 'Bennett Gillig' }],
    sdes: [
      { name: 'Maxwell Tang' },
      { name: 'Brian Liu' },
      { name: 'Devina Gera' },
      { name: 'Karthik Singireddy' },
      { name: 'Shoubhit Ravi' },
    ],
    product_managers: [{ name: 'Kurstin Burnham' }, { name: 'Tiffany Nguyen' }],
    category: 'Web Development',
  },
  {
    id: 6,
    title: 'Campus Connect',
    year: 2024,
    description:
      'Developed a mobile application in React Native for college-aged entrepreneurs to market their skill set amongst others in the area.',
    image_url: '/images/projects/CampusConnectPhoto.png',
    project_lead: [{ name: 'Sai Sompally' }],
    sdes: [
      { name: 'James Pineiro' },
      { name: 'Nipun Kisari' },
      { name: 'Michael Sun' },
      { name: 'Aaditya Saini' },
      { name: 'Sumrudhi Jadhav' },
    ],
    product_managers: [{ name: 'Vishakha Singh' }, { name: 'Parth Bhangla' }],
    category: 'Mobile Development',
  },
  {
    id: 7,
    title: 'Kapok',
    year: 2024,
    description: 'Disaster response coordination app for medical responders.',
    image_url: '/images/projects/kapok_S24.png',
    project_lead: [{ name: 'Eric Wu' }],
    sdes: [
      { name: 'Emmet Hamell' },
      { name: 'Kevin Li' },
      { name: 'Shobhit Mehrotra' },
      { name: 'Suryam Gupta' },
      { name: 'Bhargavi Patil' },
      { name: 'Adhiraj Chadha' },
      { name: 'Yona Voss-Andreae' },
    ],
    product_managers: [{ name: 'Khushi Rajoria' }, { name: 'Shreyansh Misra' }],
    category: 'Mobile Development',
  },
  {
    id: 8,
    title: 'MassPirg',
    year: 2023,
    description:
      "Students have the power to shape the future we will inherit. We work with professional staff at colleges and universities to make sure our peers have the skills, opportunities and training they need to create a better, more sustainable future for all of us. Our chapters provide the training, professional support and resources students need to tackle climate change, protect public health, revitalize our democracy, feed the hungry and more. Students have been at the forefront of social change throughout history, from civil rights, to voting rights to protecting the environment. For nearly 50 years we've helped students to get organized, mobilized and energized so they can continue to be on the cutting edge of positive change.",
    image_url: '/images/projects/MassPirg_S23.png',
    project_lead: [{ name: 'Thinh Nguyen' }],
    sdes: [
      { name: 'Aryan Nair' },
      { name: 'Simran Lekhwani' },
      { name: 'Rohan Raghuram' },
      { name: 'Shoubhit Ravi' },
    ],
    product_managers: [
      { name: 'Khanh Ngoc Nam Hyunh' },
      { name: 'Sabrina Liu' },
    ],
    category: 'Web Development',
  },
  {
    id: 9,
    title: 'AiS',
    year: 2023,
    description:
      'AIS has a dashboard for video surveillance footage, with the frontend built in Vue, and the backend built in Nest.js. AIS wishes to convert the existing frontend only to React, and also have that React version converted to a mobile app using existing conversion tools. PWA recommends using Material UI on React, written as a Progressive Web App (PWA).',
    image_url: '/images/projects/AIS_S23.png',
    project_lead: [{ name: 'Ananya Shekhawat' }],
    sdes: [
      { name: 'Eric Fournier' },
      { name: 'Yongye Tan' },
      { name: 'Adam Smith' },
      { name: 'Shoubhit Ravi' },
    ],
    product_managers: [{ name: 'Hallie Liu' }, { name: 'Vishwesh Palani' }],
    category: 'Web Development',
  },
  {
    id: 10,
    title: 'UMass Fitness and Nutrition',
    year: 2023,
    description:
      "UMass Fitness and Nutrition is a newly founded club at UMass focused around eating healthy and exercising regularly. The club's goal is to promote healthy lifestyles that can be achieved even as a full time college student.",
    image_url: '/images/projects/UMassFitness_S23.png',
    project_lead: [{ name: 'Jiaqi (Jay) Ye' }],
    sdes: [
      { name: 'Nicole Kaldus' },
      { name: 'Khushi Rajoria' },
      { name: 'Uma Purani' },
      { name: 'Aditi Bansal' },
      { name: 'Eric Wu' },
    ],
    product_managers: [{ name: 'Christopher Setiawan' }],
    category: 'Web Development',
  },
  {
    id: 11,
    title: 'Upward Bound',
    year: 2023,
    description:
      "Upward Bound program is a year-round, federally sponsored, educational program serving high school students from Springfield's High School of Commerce. Students are eligible to participate if they are from families in which neither parent has a bachelor's degree, and/or if they qualify as low-income. Upward Bound's goal is to increase the rate at which participants successfully complete high school, and enroll in and graduate from college. Upward Bound stresses the development of academic skills and motivation for students who might not traditionally be considered college-bound. During the academic year, participants are provided a variety of services ranging from individual tutoring, career advising, SAT and MCAS prep, to college-positive workshops, cultural enrichment and much more. In addition, the program addresses other issues critical to success in high school and college such as time management, self-discipline, responsibility, self-esteem, multicultural knowledge, social justice and respect.",
    image_url: '/images/projects/UpwardBound_S23.png',
    project_lead: [{ name: 'Justin Baltazar' }],
    sdes: [
      { name: 'Quang Dang' },
      { name: 'Vani Gupta' },
      { name: 'Maggie Li' },
      { name: "Matt O'Neill" },
      { name: 'Ishaan Shetty' },
      { name: 'Limbani George Chaponda' },
    ],
    product_managers: [{ name: 'Taru Meshram' }, { name: 'Erica Phan' }],
    category: 'Web Development',
  },
  {
    id: 12,
    title: 'Phenom',
    year: 2022,
    description:
      'The Public Higher Education Network of Massachusetts (PHENOM) unites students, families, alumni, professors, staff, and community members from our state universities, community colleges and the UMass system to advocate for high-quality, debt-free public college.',
    image_url: '/images/projects/Phenom_S22.png',
    project_lead: [],
    sdes: [],
    product_managers: [],
    category: 'Web Development',
  },
  {
    id: 13,
    title: 'Student Bridges',
    year: 2022,
    description:
      'Student Bridges is a non-profit, student run agency that works to improve access and success for underrepresented students.',
    image_url: '/images/projects/StudentBridges_S22.png',
    project_lead: [],
    sdes: [],
    product_managers: [],
    category: 'Web Development',
  },
  {
    id: 14,
    title: 'Lobstermen',
    year: 2022,
    description:
      "The Massachusetts Lobstermen's Association was established in 1963 by the fishermen, for the fishermen, and is presently one of the leading commercial fishing industry associations in New England. On behalf of the 1,800 members, the MLA works to maintain both the industry and the resource. The MLA strives to be proactive on issues affecting the lobster industry and is active in the management process at both the state and federal levels. The MLA communicates with its members through a monthly newspaper, weekly email, Facebook, and attendance at industry meetings. For the past 60 years, the MLA has become a trustworthy voice for the industry on important issues, and is looked to by both the fishing industry and the management community.",
    image_url: '/images/projects/Lobstermen_S22.png',
    project_lead: [],
    sdes: [],
    product_managers: [],
    category: 'Mobile Development',
  },
];

export const categories = [
  'All',
  ...Array.from(new Set(projects.map((p) => p.category))),
];
