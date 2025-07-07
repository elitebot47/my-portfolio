"use client";
import { motion } from "motion/react";
import { CldImage } from "next-cloudinary";

export default function ProfilePictureArea() {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", y: -20, opacity: 0 }}
      animate={{ filter: "blur(0px)", y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="h-full lg:pl-12 mb-1 w-full flex-col flex justify-center items-center"
    >
      <div className="w-[170px] border-2 flex justify-center items-center rounded-full h-[170px] overflow-hidden">
        <CldImage
          alt="profile picture"
          width={1000}
          height={1000}
          src="ihrnwy6eepwn2rx3wktq"
          crop="auto"
          gravity="face"
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out scale-150"
        />
      </div>

      <div className="flex md:mt-6 mt-2.5 justify-center text-xl  items-center">
        Gurgaon/India
      </div>
    </motion.div>
  );
}
