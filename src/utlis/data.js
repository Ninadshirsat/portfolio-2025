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
} from "lucide-react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";

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
    title: "Idea Drop",
    description: "Simple Website to store multiple ideas",
    image: PROJECT_IMG_1,
    tags: ["React", "Tanstack-Query", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Simple Counter",
    description: "Simple Website to store multiple ideas",
    image: PROJECT_IMG_2,
    tags: ["React", "Tanstack-Query", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
  },
  //   {
  //     id: 3,
  //     title: "Idea Drop",
  //     description: "Simple Website to store multiple ideas",
  //     image: PROJECT_IMG_1,
  //     tags: ["React", "Tanstack-Query", "MongoDB"],
  //     liveUrl: "#",
  //     githubUrl: "#",
  //     featured: false,
  //     category: "full stack",
  //   },
  //   {
  //     id: 4,
  //     title: "Idea Drop",
  //     description: "Simple Website to store multiple ideas",
  //     image: PROJECT_IMG_1,
  //     tags: ["React", "Tanstack-Query", "MongoDB"],
  //     liveUrl: "#",
  //     githubUrl: "#",
  //     featured: false,
  //     category: "full stack",
  //   },
  //   {
  //     id: 5,
  //     title: "Idea Drop",
  //     description: "Simple Website to store multiple ideas",
  //     image: PROJECT_IMG_1,
  //     tags: ["React", "Tanstack-Query", "MongoDB"],
  //     liveUrl: "#",
  //     githubUrl: "#",
  //     featured: false,
  //     category: "full stack",
  //   },
  //   {
  //     id: 6,
  //     title: "Idea Drop",
  //     description: "Simple Website to store multiple ideas",
  //     image: PROJECT_IMG_1,
  //     tags: ["React", "Tanstack-Query", "MongoDB"],
  //     liveUrl: "#",
  //     githubUrl: "#",
  //     featured: false,
  //     category: "full stack",
  //   },
  //   {
  //     id: 7,
  //     title: "Idea Drop",
  //     description: "Simple Website to store multiple ideas",
  //     image: PROJECT_IMG_1,
  //     tags: ["React", "Tanstack-Query", "MongoDB"],
  //     liveUrl: "#",
  //     githubUrl: "#",
  //     featured: false,
  //     category: "full stack",
  //   },
  //   {
  //     id: 8,
  //     title: "Idea Drop",
  //     description: "Simple Website to store multiple ideas",
  //     image: PROJECT_IMG_1,
  //     tags: ["React", "Tanstack-Query", "MongoDB"],
  //     liveUrl: "#",
  //     githubUrl: "#",
  //     featured: false,
  //     category: "full stack",
  //   },
];

export const JOURNEY_STAT = [
  {
    year: 2020,
    title: "Started frontend Development",
    company: "Self Taught",
    description: "Begin Learning web development with javascript, HTML5, CSS",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: 2021,
    title: "First internship",
    company: "Self Taught",
    description: "Begin Learning web development with javascript, HTML5, CSS",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: 2022,
    title: "Computer Science Degree",
    company: "University of Mumbai",
    description: "Begin Learning web development with javascript, HTML5, CSS",
    icon: GraduationCap,
    color: "bg-indigo-500",
  },
  {
    year: 2023,
    title: "Full Stack Developer",
    company: "Zeo Fin Ltd. (Jify)",
    description: "Begin Learning web development with javascript, HTML5, CSS",
    icon: Rocket,
    color: "bg-orange-500",
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
