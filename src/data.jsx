import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/easyBuy1.png";
import Work2 from "./assets/easyBuy2.png";
import Work3 from "./assets/easyBuy3.mp4";
import Work4 from "./assets/vn1.jpg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
    sectionId: "home-section",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
    sectionId: "about-section",
  },

  {
    id: 3,
    name: "Skills",
    icon: <FaLaptopCode className="nav__icon" />,
    path: "/skillsComponent",
    sectionId: "skills-section",
  },

  {
    id: 4,
    name: "Experience",
    icon: <FaBriefcase className="nav__icon" />,
    path: "/experience",
    sectionId: "experience-section",
  },

  {
    id: 5,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
    sectionId: "portfolio-section",
  },

  {
    id: 6,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
    sectionId: "contact-section",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Rashi",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Tiwari",
  },

  // {
  //   id: 3,
  //   title: "Age : ",
  //   description: "28 Years",
  // },

  {
    id: 3,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 4,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 5,
    title: "Address : ",
    description: "40, Clydesdale Drive, North York, Ontario, Canada, M2J 3N2",
  },

  {
    id: 6,
    title: "Phone : ",
    description: "+1 647-671-1601",
  },

  {
    id: 7,
    title: "Email : ",
    description: "tiwarirashi22@gmail.com",
  },

  {
    id: 8,
    title: "Languages : ",
    description: "English, Hindi",
  },
];

export const stats = [
  {
    id: 1,
    no: "3+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "20+",
    title: "Completed <br /> Projects",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023 - 2023",
    title: "Software Engineer Intern <span> Viral Nation </span>",
    desc: [
      " Led React Native app development for iOS. Contributed significantly to web projects with React and GraphQL.",
      " Developed GraphQL and PostgreSQL APIs. Integrated backend seamlessly with GraphQL. Translated Figma designs into UI/UX. Managed projects using GitHub and ClickUp.",
    ],
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2019 - 2022",
    title: "Senior Software Developer <span> Infosys Ltd. </span>",
    desc: [
      " Developed dynamic web projects with React.js and Angular. Showcased proficiency in modern technologies.",
      " Developed RESTful APIs with Node.js and Express. Integrated backend with MongoDB and PostgreSQL databases.",
      " Designed responsive components with front-end frameworks, collaborated for successful project delivery.",
    ],
  },
  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023",
    title: "Post Graduate Diploma <span> Lambton College in Toronto </span>",
    desc: [
      " Expertise in database design, normalization, and Java/Python programming.",
      " Created dynamic web applications with HTML, CSS, and JavaScript. Explored iOS app development using React Native.",
      " Applied software engineering principles proficiently. Managed projects efficiently with GitHub and ClickUp.",
    ],
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2017",
    title: "Bachelor of Technology <span> B.B.D.N.I.I.T.,India </span>",
    desc: [
      " Attained a comprehensive understanding of fundamental computer science concepts. Applied theoretical knowledge to practical problem-solving and programming.",
      " Gained proficiency in database design and management. Applied SQL for efficient data retrieval, storage, and manipulation.",
    ],
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "90",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "90",
  },

  {
    id: 3,
    title: "CSS",
    percentage: "90",
  },

  {
    id: 4,
    title: "ReactJS",
    percentage: "90",
  },

  {
    id: 5,
    title: "Angular",
    percentage: "65",
  },

  {
    id: 6,
    title: "Jquery",
    percentage: "50",
  },

  {
    id: 7,
    title: "React Native",
    percentage: "80",
  },

  {
    id: 8,
    title: "SQL",
    percentage: "80",
  },
  {
    id: 9,
    title: "Dot Net",
    percentage: "50",
  },
  {
    id: 10,
    title: "Java",
    percentage: "50",
  },
  {
    id: 11,
    title: "Python",
    percentage: "50",
  },
  {
    id: 12,
    title: "NodeJS",
    percentage: "90",
  },
  {
    id: 13,
    title: "GraphQL",
    percentage: "60",
  },
];

export const portfolio = [
  {
    id: 1,
    type: "img",
    img: Work1,
    title: "E-commerce website Homepage",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "E-commerce website for selling laptops and desktops",
      },

      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, Javascript, React JS, Node JS, MongoDB",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/Rashi2211/EasyBuy",
      },
    ],
  },

  {
    id: 2,
    type: "img",
    img: Work2,
    title: "E-commerce website Product Page",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "E-commerce website laptops page where the user can select the product and add to cart",
      },

      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, Javascript, React JS, Node JS, MongoDB",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/Rashi2211/EasyBuy",
      },
    ],
  },

  {
    id: 3,
    type: "video",
    img: Work3,
    title: "E-Commerce Website Video",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video of the project EasyBuy",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, Javascript, React JS, Node JS, MongoDB",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/Rashi2211/EasyBuy",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    type: "img",
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    type: "img",
    title: "Landing Page",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "Dribble",
      },
      {
        title: "Language : ",
        desc: "React JS, Node JS",
      },
      {
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    type: "img",
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dibble.com",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
