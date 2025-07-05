"use client";

import { Play } from "lucide-react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import React from "react";
import { SiGithub } from "react-icons/si";
import { Separator } from "../ui/separator";

function ProjectCardButton({
  link,
  icon,
  text,
}: {
  link: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <Link
      className="flex items-center rounded-full py-3 px-4 duration-500 border-2 hover:shadow-lg hover:shadow-white/10   hover:bg-secondary transition-colors"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <span className="ml-2 text-lg text-white">{text}</span>
    </Link>
  );
}

export default function ProjectCard({
  title,
  description,
  thumbnail,
  github_url,
  deployment_url,
}: {
  title: string;
  description: string;
  thumbnail?: string;
  github_url: string;
  deployment_url?: string;
}) {
  return (
    <div className="w-4xl  h-[90vh] border-2 shadow-accent backdrop-blur-sm bg-black/40 shadow-inner rounded-4xl px-10 flex flex-col">
      <div className="h-fit text-center  py-1.5 text-2xl">{title}</div>
      {thumbnail && (
        <div className="relative group w-full h-[80%] overflow-hidden rounded-2xl shadow-lg">
          <div></div>
          <CldImage
            alt={title}
            src={thumbnail}
            fill={true}
            className="object-cover"
          />
        </div>
      )}
      <div className="py-4 px-2 text-lg"> {description}</div>
      <Separator className="dark:bg-white/30 bg-black/30" />
      <div className="flex justify-evenly  py-4">
        {github_url && (
          <ProjectCardButton
            link={github_url}
            icon={<SiGithub className="text-white text-xl" />}
            text="Github"
          />
        )}
        {deployment_url && (
          <ProjectCardButton
            link={deployment_url}
            icon={<Play className="text-white text-xl" />}
            text="Live Demo"
          />
        )}
      </div>
    </div>
  );
}
