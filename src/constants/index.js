import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  Ecom,
  netflix,
  tip,
  threejs,
  nextjs,
  nestjs,
  k8s,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FullStack Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "MongoDb",
    icon: mongodb,
  },
  {
    name: "NestJs",
    icon: nestjs,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: k8s,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Proshop",
    description:
      "E commerce Web site designed to provide you with a seamless and intuitive shopping experience nce you find a product that catches your eye, simply click the Add to Cart button You'll have the flexibility to choose the desired quantity for each item, giving you complete control over your shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: Ecom,
    source_code_link: "https://proshop-4c6ea.web.app/",
  },
  {
    name: "NetflixClone",
    description:
      "Netflix clone using React, allowing users to explore a wide range of movies and stream their favorites seamlessly. Leveraging APIs with Axios, the app fetches data to ensure an up-to-date and diverse movie collection With a user-friendly interface, users can easily browse through different genres, popular titles, and trending movies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://netflixclone-c9958.firebaseapp.com/",
  },
  {
    name: "Tip Calculator",
    description:
      "Tip Calculator It allows users to calculate the tip amount and the total bill per person based on the bill amount, tip percentage, and the number of people,provides various tip percentage options and even allows users to enter a custom tip percentage. When the user clicks 'Submit', the application calculates the tip amount and total per person",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: tip,
    source_code_link: "https://tipcalculator-6c4d0.web.app/",
  },
];

const workProjects = [
  {
    name: "DeeperInCode",
    description:
      "E commerce Web site designed to provide you with a seamless and intuitive shopping experience nce you find a product that catches your eye, simply click the Add to Cart button You'll have the flexibility to choose the desired quantity for each item, giving you complete control over your shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: Ecom,
    source_code_link: "https://proshop-4c6ea.web.app/",
  },
  {
    name: "Aldi Deals",
    description:
      "Netflix clone using React, allowing users to explore a wide range of movies and stream their favorites seamlessly. Leveraging APIs with Axios, the app fetches data to ensure an up-to-date and diverse movie collection With a user-friendly interface, users can easily browse through different genres, popular titles, and trending movies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://netflixclone-c9958.firebaseapp.com/",
  },
  {
    name: "VipExpressDelivery",
    description:
      "Tip Calculator It allows users to calculate the tip amount and the total bill per person based on the bill amount, tip percentage, and the number of people,provides various tip percentage options and even allows users to enter a custom tip percentage. When the user clicks 'Submit', the application calculates the tip amount and total per person",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: tip,
    source_code_link: "https://tipcalculator-6c4d0.web.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
