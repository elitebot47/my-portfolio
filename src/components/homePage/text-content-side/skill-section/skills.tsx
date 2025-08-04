"use client";

import { motion } from "motion/react";
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiGo, SiPostgresql, SiTypescript } from "react-icons/si";
import SkillIcon from "./skill-icon";

const SkillIcons = [
  { name: "NextJS", symbol: <RiNextjsFill /> },
  { name: "React", symbol: <RiReactjsFill /> },
  { name: "TypeScript", symbol: <SiTypescript /> },
  { name: "Tailwind CSS", symbol: <RiTailwindCssFill /> },
  { name: "Golang", symbol: <SiGo /> },
  { name: "PostgreSQL", symbol: <SiPostgresql /> },
];

export function SkillColumn({
  iconsArray,
  className,
}: {
  iconsArray: {
    name: string;
    className?: string;
    symbol?: React.ReactNode;
  }[];
  className?: string;
}) {
  return (
    <div className="mb-1">
      <div
        className={`${className} flex justify-center mt-0.5 md:justify-start flex-wrap gap-1.5`}
      >
        {iconsArray.map((icon) => (
          <SkillIcon name={icon.name} icon={icon.symbol} key={icon.name} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsArea({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", y: 50, opacity: 0 }}
      animate={{ filter: "blur(0px)", y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className={`${className} `}
    >
      <h1 className="text-3xl text-center lg:text-start mb-4 font-bold">
        Skills
      </h1>
      <div className="flex flex-col gap-5">
        <SkillColumn iconsArray={SkillIcons} />
      </div>
    </motion.div>
  );
}
