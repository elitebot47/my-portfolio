import { Briefcase, UserCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <div
      className={`lg:w-sm rounded-full h-11 flex dark:bg-black bg-white p-1 `}
    >
      <Button className="rounded-l-full h-full" variant="outline">
        <UserCircle2 />
      </Button>
      <Separator className="bg-white/50 mx-1" orientation="vertical" />
      <Button className="rounded-full h-full" variant="outline">
        <Briefcase />
        Work
      </Button>

      <Button className="rounded-full h-full" variant="outline">
        Button
      </Button>

      <Button asChild className="rounded-r-full h-full" variant="outline">
        <ModeToggle />
      </Button>
    </div>
  );
}
