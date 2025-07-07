"use client";
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";

export default function Education({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ filter: "blur(5px)", y: 100, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      className={`${className} `}
    >
      <h2 className="lg:text-4xl text-2xl justify-center flex lg:block mb-3.5">
        Education
      </h2>
      <div className="lg:h-24 dark:bg-white/10  bg-black/10 backdrop-blur-sm shadow-inner shadow-black/15 dark:shadow-white/15 rounded-2xl lg:p-3.5 p-2 py-1  w-full">
        <div className="flex justify-between h-10 items-center">
          <div className="lg:text-2xl text-[15px]">The NorthCap University</div>
          <div className="lg:text-xl text-xs justify-end">2022-2026</div>
        </div>
        <div>
          <Separator className="w-fit " />
        </div>
        <div className="lg:text-xl flex text-[17px] mt-1.5 items-center ">
          Btech
        </div>
      </div>
    </motion.div>
  );
}
