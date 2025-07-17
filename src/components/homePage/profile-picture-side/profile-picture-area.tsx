"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function ProfilePictureArea() {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", y: -20, opacity: 0 }}
      animate={{ filter: "blur(0px)", y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="h-full lg:pl-12 mb-1 w-full flex-col flex justify-center items-center"
    >
      <div className="w-[170px] border-2 flex justify-center items-center rounded-full h-[170px] overflow-hidden">
        <Image
          width={1000}
          height={1000}
          priority
          className="w-full h-full hover:scale-150 ease-in-out transition-transform duration-500  scale-[140%]  object-cover  "
          alt="profile picture"
          src={`/images/profile.webp`}
        ></Image>
      </div>

      <div className="flex md:mt-6 mt-2.5 justify-center text-xl  items-center">Gurgaon/India</div>
    </motion.div>
  );
}
