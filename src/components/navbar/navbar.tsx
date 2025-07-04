import { Briefcase, HomeIcon, Phone } from "lucide-react";
import { Separator } from "../ui/separator";
import { ModeToggle } from "./ModeToggle";
import NavbarButton from "./navbarButton";

export default async function Navbar() {
  return (
    <div
      className={`lg:max-w-xs backdrop-blur-lg rounded-full h-11 flex dark:bg-black/70 bg-white/70 p-1 `}
    >
      <NavbarButton href="/" className="   " icon={<HomeIcon />} />
      <Separator
        className=" dark:bg-white/30 bg-black/30 mx-1.5"
        orientation="vertical"
      />
      <NavbarButton
        href="/work"
        text="Work
"
        className=" mr-1.5"
        icon={<Briefcase />}
      />
      <NavbarButton
        href="/contact"
        text="Contact
"
        className=""
        icon={<Phone />}
      />
      <Separator
        className="dark:bg-white/30 bg-black/30 mx-1.5"
        orientation="vertical"
      />

      <ModeToggle />
    </div>
  );
}
