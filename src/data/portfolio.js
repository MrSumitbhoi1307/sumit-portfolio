// =====================================================================
//  SARVA MAHITI ITHE BADLA  (all content lives in this one file)
//  - link: null  => button "Coming soon" disabled disel (dead button honar nahi)
//  - image: null => CSS mockup dakhavla jato; screenshot taklyavar to dista
// =====================================================================

export const profile = {
  name: 'Sumit Bhoi',
  fullName: 'Sumit Dagadu Bhoi',
  role: 'Full Stack MERN Developer',
  intro:
    'I build modern, responsive and scalable web applications using the MERN stack. Passionate about solving real-world problems and creating impactful digital solutions.',
  about:
    "I'm Sumit Bhoi, a passionate Full Stack MERN Developer from Pune. I love building web applications that solve real-world problems and create great user experiences. I'm always eager to learn, explore new technologies and grow in this industry.",
  location: 'Pune, Maharashtra',
  education: 'B.E. Computer Engineering (GCOE Dhule, NMU)',
  languages: 'English (Basic) | Hindi | Marathi',

  email: 'sumitbhoi2839@gmail.com',
  // TODO: tujhe real links ithe taak. Rikame thevle tar icon dakhvla jaNar nahi.
  github: 'https://github.com/MrSumitbhoi1307',
  linkedin: 'https://www.linkedin.com/in/sumit-bhoi/',
  phone: '+91 9623534508',
  resume: '/resume.pdf', // tujha PDF: public/resume.pdf ya naavane thev

  // Hero var 'Hi, I'm' khali tagline (handwritten)
  tagline: ['Code.', 'Build.', 'Repeat.'],
}

export const stats = [
  { value: '5+', label: 'Projects Built' },
  { value: '6', label: 'Months MERN Internship' },
  { value: '7.42', label: 'CGPA (B.E. Computer)' },
  { value: '100%', label: 'Learning Attitude' },
]

export const projects = [
  {
    id: 'devflow-ai',
    title: 'DevFlow AI',
    accent: 'MERN',
    description:
      'AI-powered developer workflow platform for managing projects and tasks, tracking progress, and using intelligent AI assistance to improve productivity.',
    features: [
      'AI-powered developer assistance',
      'Project, task management and Task assignment ',
      'Dashboard with progress analytics',
      'AI-powered code review and issue tracking',
      'Developer productivity and collaboration tools',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Tailwind CSS'],
    role: 'Full Stack Developer',
    duration: '6 Months (Internship)',
    image:'/images/devFlow-aI.png',
    live:'https://dev-flow-ai-pi.vercel.app/',
    source:'https://github.com/MrSumitbhoi1307/DevFlow-AI',
  },
  {
    id: 'coach-space',
    title: 'Coach Space',
    accent: 'CoachSpace',
    description:
      'A premium, full-stack learning space discovery and booking platform designed for corporate workshops and educational events, with seamless booking and payment integration.',
    features: [
      'User authentication (JWT)',
      'Learning space discovery and browsing',
      'Space booking for workshops and educational events',
      'Corporate training and event support',
      'Razorpay payment gateway integration',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Tailwind CSS'],
    role: 'Full Stack Developer',
    duration: '6 Months (Internship)',
    image:'/images/coach-space.png',
    live:'https://coach-space-smoky.vercel.app/',
    source:'https://github.com/MrSumitbhoi1307/CoachSpace',
  },
  {
    id: 'royal-glow-salon',
    title: 'Royal Glow Salon',
    accent: 'Luxury UI',
    description:
      'A modern salon website with service booking, responsive design and an elegant black-and-gold look.',
    features: [
      'Service booking system',
      'Responsive design',
      'Gallery & testimonials',
      'Modern and elegant UI',
      'Contact & location',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React.js'],
    role: 'Frontend Developer',
    duration: 'Personal Project',
    image:'/images/royal-glow-salon.png',
    live: 'https://royal-glow-salon-frontend.onrender.com/',
    source: 'https://github.com/MrSumitbhoi1307/royal-glow-salon',
  },
  {
    id: 'shiv-samarth-grocery',
    title: 'Shiv Samarth Grocery',
    accent: 'MERN',
    description:
      'A complete grocery platform with product catalog, cart, orders, coupon system and an admin panel.',
    features: [
      'Product listing & search',
      'Cart & orders',
      'Coupon system',
      'Admin dashboard',
      'Branch & wishlist management',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Tailwind CSS'],
    role: 'Full Stack Developer',
    duration: 'Personal Project',
    image: '/images/shiv-samarth-shop.png',
    live: 'https://shiv-samarth-grocery.vercel.app/',
    source: 'https://github.com/MrSumitbhoi1307/Shiv-Samarth-Grocery',
  },
]

export const experience = {
  title: 'MERN Stack Intern',
  company: 'Sumago Infotech, Pune',
  period: 'Feb 2026 · 6 Months',
  points: [
    'Completed a 6-month full-stack MERN internship.',
    'Worked on Node.js, Express.js and Postman REST API testing.',
    'Built MongoDB schemas using Mongoose.',
    'Created responsive UIs with Tailwind CSS.',
    'Gained hands-on experience in React.js, Node.js, Express.js, MongoDB and API testing.',
  ],
}

export const education = {
  degree: 'B.E. Computer Engineering',
  college: 'GCOE Dhule | NMU',
  period: '2022 – 2026',
  cgpa: '7.42',
}

export const skills = [
  { group: 'Languages', items: ['C', 'C++', 'Java', 'JavaScript'] },
  { group: 'Frontend', items: ['React.js', 'Redux', 'Tailwind CSS', 'HTML5', 'CSS3', ] },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT'] },
  { group: 'Database', items: ['MongoDB', 'Mongoose'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Postman'] },
  { group: 'Other Skills', items: ['MS Excel', 'MS Office', 'Canva', 'Documentation'] },
]
