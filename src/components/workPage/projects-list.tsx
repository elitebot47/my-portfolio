import {
  RiNextjsFill,
  RiNodejsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiPrisma,
  SiPostgresql,
  SiFastapi,
  SiTypescript,
  SiShadcnui,
  SiPytorch,
  SiVercel,
  SiHuggingface,
  SiSocketdotio,
  SiCloudinary,
  SiMongodb,
  SiMongoose,
  SiReactquery,
  SiExpress,
  SiRecoil,
  SiJsonwebtokens,
  SiFramer,
  SiVite,
  SiReacthookform,
  SiReactrouter,
} from "react-icons/si";
import ProjectCard from "./project-card";
import React from "react";
import { FiFramer } from "react-icons/fi";
interface ProjectProps {
  id?: number;
  title: string;
  description: string;
  thumbnails: Array<string>;
  github_url: string;
  deployment_url: string;
  stage: "Completed" | "Development" | "Beta" | "Archived";
  techUsed: { name: string; symbol?: React.ReactNode }[];
}
const projects: ProjectProps[] = [
  {
    id: 1,
    title: "DocWise",
    description:
      "An intelligent chat application that allows you to have conversations about your PDF documents. Upload a PDF and start asking questions!",
    thumbnails: [
      "cgihtmznyms2vl1ajl0t",
      "b9ctk2uatvdnvtra685m",
      "d7f2kiir8tlqodqcf9tk",
    ],
    github_url: "https://github.com/rishabyadav-dev/DocWise",
    deployment_url: "https://doc-wise.vercel.app",
    stage: "Completed",
    techUsed: [
      { name: "Pytorch", symbol: <SiPytorch /> },
      { name: "FastAPI", symbol: <SiFastapi /> },
      { name: "NextJS", symbol: <RiNextjsFill /> },
      { name: "Typescript", symbol: <SiTypescript /> },
      { name: "Node.js", symbol: <RiNodejsFill /> },
      { name: "Prisma", symbol: <SiPrisma /> },
      { name: "Tailwind CSS", symbol: <RiTailwindCssFill /> },
      { name: "PostgreSQL", symbol: <SiPostgresql /> },
      { name: "Next-Auth" },
      { name: "Zustand" },
      { name: "Vercel", symbol: <SiVercel /> },
      { name: "Huggingface", symbol: <SiHuggingface /> },
      { name: "ShadCN", symbol: <SiShadcnui /> },
      { name: "Framer motion", symbol: <FiFramer /> },
    ],
  },
  {
    id: 2,
    title: "EchoLine",
    description:
      "Real-time messaging app with WebSocket communication, file uploads, and notification system. Modern full-stack implementation.",
    thumbnails: ["kfznb7ntonqiculc9tli", "bkyhau7b4cbdvyvemkfz"],
    github_url: "https://github.com/rishabyadav-dev/EchoLine",
    deployment_url: "https://chat-app-roan-psi.vercel.app",
    stage: "Beta",
    techUsed: [
      { name: "Socket.IO", symbol: <SiSocketdotio /> },
      { name: "NextJS", symbol: <RiNextjsFill /> },
      { name: "Typescript", symbol: <SiTypescript /> },
      { name: "Cloudinary", symbol: <SiCloudinary /> },
      { name: "Node.js", symbol: <RiNodejsFill /> },
      { name: "Prisma", symbol: <SiPrisma /> },
      { name: "Tailwind CSS", symbol: <RiTailwindCssFill /> },
      { name: "PostgreSQL", symbol: <SiPostgresql /> },
      { name: "Next-Auth" },
      { name: "Zustand" },
      { name: "Vercel", symbol: <SiVercel /> },
      { name: "ShadCN", symbol: <SiShadcnui /> },
      { name: "Framer motion", symbol: <FiFramer /> },
    ],
  },
  {
    id: 3,
    title: "Personal Finance Tracker",
    description:
      "A robust and intuitive personal finance tracking application designed to help users manage transactions, track budgets.",
    thumbnails: ["e6wuujoi8n8jn1adxnhe", "bhc5t4sfum1jk4t4myf7"],
    github_url: "https://github.com/rishabyadav-dev/personal-finance-tracker",
    deployment_url: "https://personal-finance-tracker-pied.vercel.app",
    stage: "Beta",
    techUsed: [
      { name: "NextJS", symbol: <RiNextjsFill /> },
      { name: "Typescript", symbol: <SiTypescript /> },
      { name: "Recharts" },
      { name: "React hook form", symbol: <SiReacthookform /> },
      { name: "React query", symbol: <SiReactquery /> },

      { name: "Node.js", symbol: <RiNodejsFill /> },
      { name: "Mongoose", symbol: <SiMongoose /> },
      { name: "Tailwind CSS", symbol: <RiTailwindCssFill /> },
      { name: "MongoDB", symbol: <SiMongodb /> },
      { name: "Vercel", symbol: <SiVercel /> },
      { name: "ShadCN", symbol: <SiShadcnui /> },
    ],
  },
  {
    id: 4,
    title: "Wavybox",
    description:
      "A modern, real-time social media platform. Instantly share posts, follow users, and engage with a sleek, responsive interface.",
    thumbnails: [],
    github_url: "https://github.com/rishabyadav-dev/Wavybox",
    deployment_url: "https://wavy-box.vercel.app/",
    stage: "Development",
    techUsed: [
      { name: "NextJS", symbol: <RiNextjsFill /> },
      { name: "Typescript", symbol: <SiTypescript /> },
      { name: "Node.js", symbol: <RiNodejsFill /> },
      { name: "Prisma", symbol: <SiPrisma /> },
      { name: "Tailwind CSS", symbol: <RiTailwindCssFill /> },
      { name: "PostgreSQL", symbol: <SiPostgresql /> },
      { name: "Next-Auth" },
      { name: "Zustand" },
      { name: "Vercel", symbol: <SiVercel /> },
      { name: "ShadCN", symbol: <SiShadcnui /> },
      { name: "Framer motion", symbol: <FiFramer /> },
      { name: "Cloudinary", symbol: <SiCloudinary /> },
    ],
  },
  {
    id: 5,
    title: "Notely",
    description:
      "A minimalist, Google Keep-inspired note-taking app. Create, organize, and retrieve notes & to-dos effortlessly with a clean, responsive interface.",
    thumbnails: [],
    github_url: "https://github.com/rishabyadav-dev/Notely",
    deployment_url: "",
    stage: "Archived",
    techUsed: [
      { name: "Reactjs", symbol: <RiReactjsFill /> },
      { name: "Express", symbol: <SiExpress /> },
      { name: "Recoil", symbol: <SiRecoil /> },
      { name: "JWT", symbol: <SiJsonwebtokens /> },
      { name: "Framer motion", symbol: <SiFramer /> },
      { name: "Vite", symbol: <SiVite /> },
      { name: "React router", symbol: <SiReactrouter /> },

      { name: "Node.js", symbol: <RiNodejsFill /> },
      { name: "Mongoose", symbol: <SiMongoose /> },
      { name: "Tailwind CSS", symbol: <RiTailwindCssFill /> },
      { name: "MongoDB", symbol: <SiMongodb /> },
    ],
  },
  {
    id: 6,
    title: "This portfolio ",
    description:
      "A modern, minimalist portfolio showcasing my journey as a full-stack web developer. Built to demonstrate my skills and passion for creating exceptional user experiences.",
    thumbnails: [],
    github_url: "https://github.com/rishabyadav-dev/my-portfolio",
    deployment_url: "",
    stage: "Beta",
    techUsed: [
      { name: "NextJS", symbol: <RiNextjsFill /> },
      { name: "Typescript", symbol: <SiTypescript /> },
      { name: "Node.js", symbol: <RiNodejsFill /> },
      { name: "Prisma", symbol: <SiPrisma /> },
      { name: "Tailwind CSS", symbol: <RiTailwindCssFill /> },
      { name: "PostgreSQL", symbol: <SiPostgresql /> },
      { name: "Zustand" },
      { name: "Vercel", symbol: <SiVercel /> },
      { name: "ShadCN", symbol: <SiShadcnui /> },
      { name: "Framer-motion", symbol: <FiFramer /> },
      { name: "Cloudinary", symbol: <SiCloudinary /> },
    ],
  },
];

export default async function ProjectList() {
  return (
    <div className="w-full  flex flex-col gap-10 pb-28 items-center h-fit">
      {projects.map((project: ProjectProps) => (
        <div className=" w-full rounded-4xl" key={project.id}>
          <ProjectCard
            title={project.title}
            description={project.description}
            thumbnails={project.thumbnails}
            github_url={project.github_url}
            deployment_url={project.deployment_url}
            stage={project.stage}
            techUsed={project.techUsed}
          />
        </div>
      ))}
    </div>
  );
}
