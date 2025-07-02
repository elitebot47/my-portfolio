import { Briefcase, HomeIcon, Phone } from "lucide-react";
import { Separator } from "../ui/separator";
import { ModeToggle } from "./ModeToggle";
import NavbarButton from "./navbarButton";

export default async function Navbar() {
  return (
    <div
      className={`lg:max-w-xs rounded-full h-11 flex dark:bg-black/70 bg-white p-1 `}
    >
      <NavbarButton
        href="/"
        className="  mx-auto rounded-l-full"
        icon={<HomeIcon />}
      />
      <Separator className=" bg-white/30 mx-1.5" orientation="vertical" />
      <NavbarButton
        href="/work"
        text="Work
"
        className="rounded-full mr-1.5"
        icon={<Briefcase />}
      />
      <NavbarButton
        href="/contact"
        text="Contact
"
        className="rounded-full"
        icon={<Phone />}
      />
      <Separator className="bg-white/30 mx-1.5" orientation="vertical" />

      <ModeToggle className={``} />
    </div>
  );
}
