import {
  Code2,
  GraduationCap,
  Briefcase,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Database,
  Server,
  Mail,
  MapPin,
  Phone,
  Brain,
} from "lucide-react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

// import PROJECT_IMG_0 from "../assets/images/project-0.png";
import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png";
import PROJECT_IMG_4 from "../assets/images/project-4.png";
import PROJECT_IMG_5 from "../assets/images/project-5.png";
import PROJECT_IMG_6 from "../assets/images/project-6.png";
import PROJECT_IMG_7 from "../assets/images/project-7.png";
import PROJECT_IMG_8 from "../assets/images/project-8.png";
import PROJECT_IMG_9 from "../assets/images/project-9.png";

export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, user interfaces",
    skills: [
      { name: "React", level: 90, color: "bg-cyan-500" },
      { name: "JavaScript", level: 85, color: "bg-yellow-500" },
      { name: "TypeScript", level: 75, color: "bg-blue-600" },
      { name: "Tailwind CSS", level: 75, color: "bg-teal-400" },
      { name: "Framer Motion", level: 50, color: "bg-purple-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building Robust Server side solutions",
    skills: [
      { name: "Node.js", level: 65, color: "bg-green-500" },
      { name: "Express.js", level: 70, color: "bg-indigo-600" },
      { name: "REST APIs", level: 75, color: "bg-indigo-500" },
      { name: "Authentication (JWT Auth)", level: 75, color: "bg-purple-600" },
      { name: "Java + SpringBoot", level: 75, color: "bg-emerald-600" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Managing Data accuratly",
    skills: [
      { name: "MongoDB", level: 65, color: "bg-indigo-500" },
      { name: "SQL", level: 70, color: "bg-orange-500" },
      { name: "Redis", level: 50, color: "bg-red-600" },
    ],
  },
];

export const TECT_STACK = [
  "React",
  "javascript",
  "HTML5",
  "CSS3",
  "MongoDB",
  "Vite",
  "Notion",
  "Slack",
];

export const STATS = [
  { number: "10+", label: "Projects Completed" },
  { number: "2+", label: "Years Experience" },
  { number: "10+", label: "Technologies" },
  { number: "100%", label: "Client Satisfaction" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Notes-App Using MERN",
    description:
      "A Notes Application that allows users to create, store, and manage multiple personal notes.",
    image: PROJECT_IMG_1,
    tags: ["React", "TailwindCSS", "MongoDB", "Express", "Node.js"],
    liveUrl: "https://mern-notesapp-ysu9.onrender.com/",
    githubUrl: "https://github.com/Ninadshirsat/mern-notesapp",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 6,
    title: "Crypto-Dash",
    description:
      "A dashboard web application that displays real-time cryptocurrency market data and charts, enabling users to track prices, trends and market cap for various coins.",
    image: PROJECT_IMG_6,
    tags: [
      "React",
      "API Integration",
      "React-Router",
      "Charts",
      "Cryptocurrency",
    ],
    liveUrl: "https://crypto-dash-smoky.vercel.app/",
    githubUrl: "https://github.com/Ninadshirsat/crypto-dash",
    featured: true,
    category: "Frontend",
  },
  {
    id: 5,
    title: "Shopping-Cart",
    description:
      "A React-based shopping cart user interface that uses the React Context hook for global state management (cart items & totals) and a mock backend via JSON Server for product data. Built with Vite and modern tooling.",
    image: PROJECT_IMG_5,
    tags: ["React", "useContext", "useState", "Vite", "JSON Server"],
    liveUrl: "https://shopping-cart-ui.onrender.com/",
    githubUrl: "https://github.com/Ninadshirsat/shopping-cart-ui",
    featured: true,
    category: "Frontend",
  },
  {
    id: 7,
    title: "Friendly-Dev-Portfolio-Website",
    description:
      "Frontend for the Friendly Dev blog platform: a React + Vite app integrated with a headless CMS, fetching blog posts, categories & media from Strapi, with rich animations (Framer Motion) and styling via TailwindCSS.",
    image: PROJECT_IMG_7,
    tags: [
      "React",
      "React-Router",
      "TailwindCSS",
      "Strapi",
      "Cloudinary",
      "Framer-Motion",
      "Vite",
      "Node.js",
      "API",
    ],
    liveUrl: "https://friendly-dev-frontend-taupe.vercel.app/",
    githubUrl: "https://github.com/Ninadshirsat/friendly-dev-frontend",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 8,
    title: "Github-Finder",
    description:
      "A React app to search GitHub users and view their profile details, repos, and stats. Uses TanStack Query for caching & efficient data fetching, ensuring fast and optimized API calls with a clean UI",
    image: PROJECT_IMG_8,
    tags: ["React", "Tanstack-Query", "Axios", "Github API", "Vite"],
    liveUrl: "https://github-finder.vercel.app/",
    githubUrl: "https://github.com/Ninadshirsat/github-finder-tanstack-query",
    featured: false,
    category: "Frontend",
  },
  {
    id: 9,
    title: "Idea Drop",
    description:
      "Idea-Drop platform where users can share and explore ideas. Includes authentication UI, idea submission forms, filters, and a clean, modern interface",
    image: PROJECT_IMG_9,
    tags: ["React", "Tanstack-Query", "JWT Auth", "Node.js", "Express", "Vite"],
    liveUrl: "https://idea-drop-ui-ten.vercel.app/",
    githubUrl: "https://github.com/Ninadshirsat/idea-drop-ui",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Notes App",
    description:
      "Notes-App built with React where users can create, view and manage notes through a clean UI",
    image: PROJECT_IMG_2,
    tags: ["React", "Vite", "LocalStorage"],
    liveUrl: "https://notes-app-only-ui.vercel.app/",
    githubUrl: "https://github.com/Ninadshirsat/notes-app_frontend",
    featured: false,
    category: "Frontend",
  },
  {
    id: 3,
    title: "Star Ratings-UI",
    description:
      "A reusable star-rating component built in React that allows users to select ratings interactively. Useful for reviews, product feedback, and UI demos.",
    image: PROJECT_IMG_3,
    tags: ["React", "Vite", "UI Component"],
    liveUrl: "https://star-ratings-rose.vercel.app/",
    githubUrl: "https://github.com/Ninadshirsat/star-ratings",
    featured: false,
    category: "Frontend",
  },
  {
    id: 4,
    title: "Simple Timer",
    description:
      "A clean and lightweight React timer app that allows users to start, pause, and reset a running timer. Built as a minimal UI component ideal for practice and reusable timing functionality.",
    image: PROJECT_IMG_4,
    tags: ["React", "Vite", "UI Component"],
    liveUrl: "https://simple-timer-teal.vercel.app/",
    githubUrl: "https://github.com/Ninadshirsat/simple-timer",
    featured: false,
    category: "Frontend",
  },
];

export const JOURNEY_STAT = [
  {
    year: 2020,
    title: "Started Frontend Development",
    company: "Self Taught",
    description: "Begin Learning web development with javascript, HTML5, CSS",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: 2021,
    title: "First internship",
    company: "Urban Estate Agent",
    description: "Developed a website for a Estate agency",
    icon: Briefcase,
    color: "bg-teal-500",
  },
  {
    year: 2022,
    title: "Computer Science Bachelors Degree",
    company: "University of Mumbai",
    description: "Completed my Bachelors degree in Computer Engineering",
    icon: GraduationCap,
    color: "bg-indigo-700",
  },
  {
    year: 2023,
    title: "Full Stack Developer",
    company: "Zeo Fin Ltd. (Jify)",
    description: "Worked as a part of development team in a Fintech Startup",
    icon: Rocket,
    color: "bg-red-800",
  },
  {
    year: 2024,
    title: "Software Engineering Trainee",
    company: "DELL Technology",
    description: "Begin Learning web development with javascript, HTML5, CSS",
    icon: Brain,
    color: "bg-orange-500",
  },
  {
    year: 2025,
    title: "Masters in Computer Science",
    company: "Veermata Jijabai Technological Institute",
    description:
      "Completed my Masters degree in Computer Engineering specialisation in software engineering",
    icon: GraduationCap,
    color: "bg-indigo-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting institutive interfaces than users love",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Crafting institutive interfaces than users love",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Crafting institutive interfaces than users love",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "Github",
    icon: FiGithub,
    url: "https://github.com/Ninadshirsat",
    color: "hover: text-gray-400",
    bgColor: "hover: bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/ninad-shirsat-177656201/",
    color: "hover: text-sky-400",
    bgColor: "hover: bg-sky-500/10",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    url: "https://x.com/ninad_rajan",
    color: "hover: text-blue-400",
    bgColor: "hover: bg-blue-500/10",
  },
  {
    name: "Email",
    icon: Mail,
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=ninadshirsat12@gmail.com&su=Hello%20Ninad&body=I%20want%20to%20connect%20with%20you",
    color: "hover: text-green-400",
    bgColor: "hover: bg-green-500/10",
  },
];

export const CONTACT_INFO = [
  { icon: MapPin, label: "Location", value: "Mumbai, MH" },
  { icon: Mail, label: "Email", value: "ninadshirsat12@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91-9969816673" },
];
