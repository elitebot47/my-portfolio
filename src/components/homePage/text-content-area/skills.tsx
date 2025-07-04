import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import SkillIcon from "./skill-icon";

const FEicons = [
  { name: "NextJS", symbol: <RiNextjsFill /> },
  { name: "ReactJS", symbol: <RiReactjsFill /> },
  { name: "JavaScript", symbol: <RiNextjsFill /> },
  { name: "TypeScript", symbol: <RiReactjsFill /> },
  { name: "HTML", symbol: <RiNextjsFill /> },
  { name: "Tailwind CSS", symbol: <RiReactjsFill /> },
  { name: "CSS", symbol: <RiReactjsFill /> },
];
const BEicons = [
  { name: "Node.js", symbol: <RiNextjsFill /> },
  { name: "Express.js", symbol: <RiReactjsFill /> },
  { name: "Prisma", symbol: <RiNextjsFill /> },
  { name: "PostgreSQL", symbol: <RiReactjsFill /> },
  { name: "Mongoose", symbol: <RiNextjsFill /> },
  { name: "MongoDB", symbol: <RiReactjsFill /> },
];
const AUTHicons = [
  { name: "Next-Auth", symbol: <RiNextjsFill /> },
  { name: "Argon2", symbol: <RiReactjsFill /> },
];
const SMicons = [
  { name: "Zustand", symbol: <RiNextjsFill /> },
  { name: "React Query", symbol: <RiReactjsFill /> },
];
const COMMUNICATIONicons = [{ name: "Socket.IO", symbol: <RiNextjsFill /> }];
const TOOLSicons = [
  { name: "Git/GitHub", symbol: <RiNextjsFill /> },
  { name: "VS Code", symbol: <RiReactjsFill /> },
  { name: "Cursor AI", symbol: <RiReactjsFill /> },
];

export default async function SkillsArea() {
  return (
    <div>
      <div className="text-4xl">Technical skills</div>
      <div>
        <div>
          <div>Front-End Development</div>
          <div>
            {FEicons.map((icon) => (
              <SkillIcon name={icon.name} icon={icon.symbol} key={icon.name} />
            ))}
          </div>
        </div>
        <div>
          <div>Back-End Development</div>
          <div>
            {BEicons.map((icon) => (
              <SkillIcon name={icon.name} icon={icon.symbol} key={icon.name} />
            ))}
          </div>
        </div>
        <div>
          <div>Authentication & Security</div>
          <div>
            {AUTHicons.map((icon) => (
              <SkillIcon name={icon.name} icon={icon.symbol} key={icon.name} />
            ))}
          </div>
        </div>
        <div>
          <div>State Management</div>
          <div>
            {SMicons.map((icon) => (
              <SkillIcon name={icon.name} icon={icon.symbol} key={icon.name} />
            ))}
          </div>
        </div>
        <div>
          <div> Real-Time Communication</div>
          <div>
            {COMMUNICATIONicons.map((icon) => (
              <SkillIcon name={icon.name} icon={icon.symbol} key={icon.name} />
            ))}
          </div>
        </div>
        <div>
          <div>Tools & Technologies</div>
          <div>
            {TOOLSicons.map((icon) => (
              <SkillIcon name={icon.name} icon={icon.symbol} key={icon.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
