import ProjectCard from "./project-card";
interface ProjectProps {
  id?: number;
  title: string;
  description: string;
  thumbnails: Array<string>;
  github_url: string;
  deployment_url: string;
}
const projects = [
  {
    id: 1,
    title: "DocWise",
    description:
      "An intelligent chat application that allows you to have conversations about your PDF documents. Upload a PDF and start asking questions!",
    thumbnails: ["ub4txzzorfczfc5re8gh", "o5l2kpttqurmi8decjzl"],
    github_url: "https://github.com/elitebot47/DocWise",
    deployment_url: "https://doc-wise.vercel.app",
  },
  {
    id: 2,
    title: "EchoLine",
    description:
      "Real-time messaging app with WebSocket communication, file uploads, and notification system. Modern full-stack implementation.",
    thumbnails: ["kfznb7ntonqiculc9tli", "bkyhau7b4cbdvyvemkfz"],
    github_url: "https://github.com/elitebot47/EchoLine",
    deployment_url: "https://chat-app-roan-psi.vercel.app",
  },
];

export default async function ProjectList() {
  return (
    <div className="w-full  flex flex-col gap-10 items-center h-full">
      {projects.map((project: ProjectProps) => (
        <div className="dark:shadow-lg shadow-sm  rounded-4xl" key={project.id}>
          <ProjectCard
            title={project.title}
            description={project.description}
            thumbnails={project.thumbnails}
            github_url={project.github_url}
            deployment_url={project.deployment_url}
          />
        </div>
      ))}
    </div>
  );
}
