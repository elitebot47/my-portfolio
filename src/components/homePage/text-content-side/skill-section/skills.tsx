import { FaGitAlt } from "react-icons/fa";
import {
  RiHtml5Fill,
  RiJavascriptFill,
  RiNextjsFill,
  RiNodejsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiPrisma,
  SiReactquery,
  SiSocketdotio,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import SkillIcon from "./skill-icon";

const FEicons = [
  { name: "NextJS", symbol: <RiNextjsFill /> },
  { name: "ReactJS", symbol: <RiReactjsFill /> },
  { name: "JavaScript", symbol: <RiJavascriptFill /> },
  { name: "TypeScript", symbol: <SiTypescript /> },
  { name: "HTML", symbol: <RiHtml5Fill /> },
  { name: "Tailwind CSS", symbol: <RiTailwindCssFill /> },
  { name: "CSS", symbol: <RiReactjsFill /> },
];
const BEicons = [
  { name: "Node.js", symbol: <RiNodejsFill /> },
  { name: "Express.js", symbol: <SiExpress /> },
  { name: "Prisma", symbol: <SiPrisma /> },
  { name: "PostgreSQL", symbol: <SiPostgresql /> },
  { name: "Mongoose", symbol: <SiMongoose /> },
  { name: "MongoDB", symbol: <SiMongodb /> },
];
const AUTHicons = [
  {
    name: "Next-Auth",
  },
  { name: "Argon2" },
];
const SMicons = [
  { name: "Zustand" },
  { name: "React Query", symbol: <SiReactquery /> },
];
const COMMUNICATIONicons = [{ name: "Socket.IO", symbol: <SiSocketdotio /> }];
const TOOLSicons = [
  { name: "Git/GitHub", symbol: <FaGitAlt /> },
  { name: "VS Code", symbol: <VscVscode /> },
  {
    name: "Cursor AI",
  },
];

function SkillColumn({
  iconsArray,
  heading,
}: {
  iconsArray: {
    name: string;
    className?: string;
    symbol?: React.ReactNode;
  }[];
  heading: string;
}) {
  return (
    <div>
      <div className="text-2xl  text-center lg:text-start">{heading}</div>
      <div className="flex justify-center md:justify-start flex-wrap gap-1">
        {iconsArray.map((icon) => (
          <SkillIcon name={icon.name} icon={icon.symbol} key={icon.name} />
        ))}
      </div>
    </div>
  );
}

export default async function SkillsArea({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`${className} `}>
      <div className="text-4xl text-center lg:text-start mb-3.5">
        Technical skills
      </div>
      <div>
        <SkillColumn heading="Front-End Development" iconsArray={FEicons} />
        <SkillColumn heading="Back-End Development" iconsArray={BEicons} />
        <SkillColumn
          heading="Authentication & Security"
          iconsArray={AUTHicons}
        />
        <SkillColumn heading="State Management" iconsArray={SMicons} />
        <SkillColumn
          heading="Real-Time Communication"
          iconsArray={COMMUNICATIONicons}
        />
        <SkillColumn heading="Tools & Technologies" iconsArray={TOOLSicons} />
      </div>
    </div>
  );
}
