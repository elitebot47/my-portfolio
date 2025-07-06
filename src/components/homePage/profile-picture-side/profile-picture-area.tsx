"use client";
import { motion } from "motion/react";
import { CldImage } from "next-cloudinary";

export default function ProfilePictureArea() {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-full lg:pl-12 w-full flex-col flex justify-center items-center"
    >
      <div className="w-[170px] border-2 flex justify-center items-center rounded-full h-[170px] ">
        <CldImage
          alt="profile picture"
          width={1000}
          height={1000}
          src="dotwvanej85ajcmz4c8c"
          crop="auto"
          gravity="north_east"
          style={{ borderRadius: "50%" }}
        />
      </div>

      <div className="flex md:mt-6 mt-2.5 justify-center text-xl  items-center">
        Gurgaon/India
      </div>
    </motion.div>
  );
}
