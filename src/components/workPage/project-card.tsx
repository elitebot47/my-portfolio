"use client";

import { Play } from "lucide-react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import React from "react";
import { SiGithub } from "react-icons/si";

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
    <div>
      <Link className="flex" href={link}>
        <div>{icon}</div>
        <div>{text}</div>
      </Link>
    </div>
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
    <div className="w-3xl h-96 bg-black rounded-2xl p-2">
      <div>
        {thumbnail && (
          <div className="w-full group h-full">
            <CldImage alt={title} crop={`fill`} src={thumbnail} />
          </div>
        )}
        <div className="group-hover:block hidden ">{description}</div>
      </div>
      <div>
        {deployment_url && (
          <ProjectCardButton
            link={github_url}
            icon={<SiGithub />}
            text="Github"
          ></ProjectCardButton>
        )}
        {deployment_url && (
          <ProjectCardButton
            link={deployment_url}
            icon={<Play />}
            text="Github"
          ></ProjectCardButton>
        )}
      </div>
    </div>
  );
}
