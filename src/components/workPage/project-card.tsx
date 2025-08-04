"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play } from "lucide-react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import React from "react";
import { SiGithub } from "react-icons/si";
import { SkillColumn } from "../homePage/text-content-side/skill-section/skills";
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
      className="flex  items-center rounded-full py-2 px-3 duration-500 border dark:border-2 dark:border-foreground/20  border-gray-400 hover:shadow-lg transition-all  dark:hover:shadow-white/10 hover:shadow-black/10   hover:bg-secondary "
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <span className="ml-2 text-lg dark:text-white text-black">{text}</span>
    </Link>
  );
}

export default function ProjectCard({
  title,
  description,
  thumbnails,
  github_url,
  deployment_url,
  stage,
  techUsed,
}: {
  title: string;
  description: string;
  thumbnails?: Array<string>;
  github_url: string;
  deployment_url?: string;
  stage: "Completed" | "Development" | "Beta" | "Archived";
  techUsed: { name: string; symbol?: React.ReactNode }[];
}) {
  return (
    <div className="lg:w-4xl  h-auto  lg:h-fit   border shadow-gray-300/50 backdrop-blur-sm dark:bg-black/40 bg-white/40 shadow-inner rounded-4xl px-3 lg:px-10 flex flex-col">
      <div className="h-fit text-center  py-1.5 text-2xl">{title}</div>
      {thumbnails && thumbnails.length > 0 && (
        <div className="relative  border w-fit  h-fit overflow-hidden rounded-b-none rounded-2xl lg:rounded-b-none shadow-lg">
          <Carousel>
            <CarouselContent>
              {thumbnails.map((pic, index) => (
                <CarouselItem key={index}>
                  <CldImage
                    alt={pic}
                    src={pic}
                    width={1200}
                    height={750}
                    className="w-full h-auto object-contain"
                    quality="90"
                    crop="fit"
                    loading="lazy"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {thumbnails.length > 1 && (
              <CarouselPrevious
                className={`bg-accent absolute left-4 top-1/2 -translate-y-1/2 z-10`}
              />
            )}
            {thumbnails.length > 1 && (
              <CarouselNext className=" bg-accent absolute right-4 top-1/2 -translate-y-1/2 z-10" />
            )}
          </Carousel>
        </div>
      )}
      <div
        className={`text-center bg-input/70 p-1 ${
          thumbnails?.length === 0 ? " rounded-full" : "rounded-b-2xl"
        }  `}
      >
        {stage}
      </div>
      <div className="py-2 lg:py-3 text-center px-2 text-lg ">
        {description}
      </div>
      <Separator className="dark:bg-white/30 bg-black/30" />
      {techUsed.length > 0 && (
        <div className={`text-center  py-1.5`}>
          <SkillColumn
            className={`  !justify-center !gap-1.5`}
            iconsArray={techUsed}
          />
        </div>
      )}
      <Separator className="dark:bg-white/30 bg-black/30" />
      <div className="flex justify-evenly  py-3">
        {github_url.trim() && (
          <ProjectCardButton
            link={github_url}
            icon={<SiGithub className="dark:text-white text-xl" />}
            text="Github"
          />
        )}

        {deployment_url?.trim() && (
          <ProjectCardButton
            link={deployment_url}
            icon={<Play className="dark:text-white text-xl" />}
            text="Live Demo"
          />
        )}
      </div>
    </div>
  );
}
