import { title } from "process";
import ProjectCard from "./project-card";
interface ProjectProps {
  id?: number;
  title: string;
  description: string;
  thumbnail: string;
  github_url: string;
  deployment_url: string;
}
const projects = [
  {
    id: 1,
    title: "DocWise",
    description:
      "An intelligent chat application that allows you to have conversations about your PDF documents. Upload a PDF and start asking questions!",
    thumbnail: "ub4txzzorfczfc5re8gh",
    github_url: "https://github.com/elitebot47/DocWise",
    deployment_url: "https://doc-wise.vercel.app/",
  },
];

export default async function ProjectList() {
  return (
    <div>
      {projects.map((project: ProjectProps) => (
        <div key={project.id}>
          <ProjectCard
            title={title}
            description={project.description}
            thumbnail={project.thumbnail}
            github_url={project.github_url}
            deployment_url={project.deployment_url}
          />
        </div>
      ))}
    </div>
  );
}
