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

import PROJECT_IMG_0 from "../assets/images/project-0.png";
import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png";
import PROJECT_IMG_4 from "../assets/images/project-4.png";
import PROJECT_IMG_5 from "../assets/images/project-5.png";
import PROJECT_IMG_6 from "../assets/images/project-6.png";
// import PROJECT_IMG_7 from "../assets/images/project-7.png";
import PROJECT_IMG_8 from "../assets/images/project-8.png";
// import PROJECT_IMG_9 from "../assets/images/project-9.png";

export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, user interfaces",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "TypeScript", level: 70, color: "bg-blue-600" },
      { name: "Tailwind Css", level: 75, color: "bg-pink-500" },
      { name: "Framer Motion", level: 50, color: "bg-gray-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building Robust Server side solutions",
    skills: [
      { name: "Node.js", level: 65, color: "bg-green-500" },
      { name: "Express.js", level: 70, color: "bg-purple-600" },
      { name: "REST APIs", level: 75, color: "bg-yellow-500" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Managing Data accuratly",
    skills: [
      { name: "MongoDB", level: 65, color: "bg-red-900" },
      { name: "SQL", level: 70, color: "bg-indigo-500" },
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
    description: "Notes-App to store multiple notes",
    image: PROJECT_IMG_1,
    tags: ["React", "Tailwindcss", "MongoDB"],
    liveUrl: "https://mern-notesapp-ysu9.onrender.com/",
    githubUrl: "https://github.com/Ninadshirsat/mern-notesapp",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Notes App",
    description:
      "Simple Website to store multiple notes works on the UI with localstorage",
    image: PROJECT_IMG_2,
    tags: ["React", "Vite", "LocalStorage"],
    liveUrl: "#",
    githubUrl: "https://github.com/Ninadshirsat/notes-app_frontend",
    featured: false,
    category: "Front-End",
  },
  {
    id: 3,
    title: "Star Ratings-UI",
    description: "UI to show Star-ratings",
    image: PROJECT_IMG_3,
    tags: ["React", "Vite"],
    liveUrl: "#",
    githubUrl: "https://github.com/Ninadshirsat/star-ratings",
    featured: false,
    category: "Front-End",
  },
  {
    id: 4,
    title: "Simple Timer",
    description: "Simple Website to Start, Pause & Reset the timer",
    image: PROJECT_IMG_4,
    tags: ["React", "Vite"],
    liveUrl: "#",
    githubUrl: "https://github.com/Ninadshirsat/simple-timer",
    featured: false,
    category: "Front-End",
  },
  {
    id: 5,
    title: "Shopping-Cart",
    description: "Simple Website to store multiple ideas",
    image: PROJECT_IMG_5,
    tags: ["React", "JSON-Server", "Tailwindcss"],
    liveUrl: "#",
    githubUrl: "https://github.com/Ninadshirsat/shopping-cart-ui",
    featured: false,
    category: "Front-End",
  },
  {
    id: 6,
    title: "Crypto-Dash",
    description: "Website to browse through multiple crypto-currencies",
    image: PROJECT_IMG_6,
    tags: ["React", "React-Router", "Vite"],
    liveUrl: "https://crypto-dash-smoky.vercel.app/",
    githubUrl: "https://github.com/Ninadshirsat/crypto-dash",
    featured: true,
    category: "Front-End",
  },
  {
    id: 7,
    title: "Friendly-Dev-Portfolio-Website",
    description: "Simple Website to store multiple ideas",
    image: PROJECT_IMG_0,
    tags: ["React", "Tanstack-Query", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 8,
    title: "Github-Finder",
    description: "Website to search Github-Users",
    image: PROJECT_IMG_8,
    tags: ["React", "Tanstack-Query"],
    liveUrl: "#",
    githubUrl: "https://github.com/Ninadshirsat/github-finder-tanstack-query",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 9,
    title: "Idea Drop",
    description: "Simple Website to store multiple ideas",
    image: PROJECT_IMG_0,
    tags: ["React", "Tanstack-Query", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
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
    color: "bg-green-500",
  },
  {
    year: 2022,
    title: "Computer Science Bachelors Degree",
    company: "University of Mumbai",
    description: "Completed my Bachelors degree in Computer Engineering",
    icon: GraduationCap,
    color: "bg-indigo-500",
  },
  {
    year: 2023,
    title: "Full Stack Developer",
    company: "Zeo Fin Ltd. (Jify)",
    description: "Worked as a part of development team in a Fintech Startup",
    icon: Rocket,
    color: "bg-red-500",
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
    url: "https://github.com/Ninadshirsat",
    color: "hover: text-sky-400",
    bgColor: "hover: bg-sky-500/10",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    url: "https://github.com/Ninadshirsat",
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
