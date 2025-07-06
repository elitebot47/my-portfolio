"use client";

import { motion } from "motion/react";
import SocialIconList from "./text-content-side/social-icon-strip/social-icon-list";

export default function IntroArea() {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h1 className="font-sans lg:mt-4 mt-8 font-semibold lg:text-[85px] flex justify-center sm:justify-normal text-[40px]">
        Rishab Yadav
      </h1>
      <h2 className="ml-1  font-secondary lg:text-accent-foreground/70 text-accent-foreground md:text-4xl text-xl flex opacity-70 justify-center md:justify-normal ">
        Full Stack Web Developer
      </h2>

      <SocialIconList />
      <p className="font-sans  lg:text-start text-center mb-9 text-xl">
        {`I love building cool stuff and experimenting with new ideas. I've worked on a variety of projects and have a bit of an obsession with Next.js.`}
      </p>
    </motion.div>
  );
}
