"use client";
import { Briefcase, HomeIcon, Phone } from "lucide-react";
import { motion } from "motion/react";
import { Separator } from "../ui/separator";
import { ModeToggle } from "./ModeToggle";
import NavbarButton from "./navbarButton";

export default function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className={` max-w-xs shadow-inner dark:shadow-white/20 shadow-black/10  backdrop-blur-lg  rounded-full lg:h-12 h-[51px] flex dark:bg-black/70 bg-white/70 p-1 `}
    >
      <NavbarButton href="/" icon={<HomeIcon />} />
      <Separator
        className="!h-8 my-auto dark:bg-white/30 bg-black/30 mx-1 lg:mx-1.5"
        orientation="vertical"
      />
      <NavbarButton
        href="/work"
        text="Work"
        className="lg:mr-1.5 mr-1"
        icon={<Briefcase />}
      />
      <NavbarButton href="/contact" text="Contact" icon={<Phone />} />
      <Separator
        className="!h-8 my-auto dark:bg-white/30 bg-black/30 lg:mx-1.5 mx-1"
        orientation="vertical"
      />
      <ModeToggle />
    </motion.div>
  );
}
