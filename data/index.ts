export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: "Showing your ideas to the world is my passion. Let's build something great together!",
    description: '',
    className: 'lg:col-span-2 min-h-64 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'h-40 gap-6 lg:col-span-2 md:col-span-3  md:row-span-2 md:h-72 ',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently building a SASS ',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Knowledgeden',
    des: 'An course marketplace similar to udemy,built with wordpress and elementor',
    img: '/knowledgeden-bg.png',
    iconLists: ['/wordpress-icon.svg'],
    link: 'https://knowledgeden.infinityfreeapp.com/',
  },
  {
    id: 2,
    title: 'Haven Bikes',
    des: 'A bike ecommerce app with a payment system and a user-friendly interface.',
    img: '/haven-bikes.png',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/c.svg', '/prisma-2.svg'],
    link: 'https://haven-bikes.vercel.app/',
  },
  {
    id: 3,
    title: 'Luxury Accord',
    des: 'A furniture ecommerce app with a payment system and a user-friendly interface.',
    img: '/luxury-accord.png',
    iconLists: [
      '/re.svg',
      '/tail.svg',
      '/c.svg',
      '/airtable-svg.svg',
      'nodejs-logo.svg',
    ],
    link: 'https://luxury-accord.vercel.app/',
  },
  // {
  //   id: 4,
  //   title: 'Live Docs',
  //   des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
  //   img: '/p4.svg',
  //   iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
  //   link: '/ui.apple.com',
  // },
];

export const workExperience = [
  {
    id: 3,
    title: 'Freelance Frontend Engineer',
    desc: '2022-present',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp1.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https://github.com/GeniusObi',
  },
  {
    id: 2,
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/oyewole-faith-oluwadamilare-1162a3228/',
  },
];
