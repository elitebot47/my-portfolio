import ProjectList from "@/components/workPage/projects-list";

export default async function WorkPage() {
  return (
    <div className="w-full h-full px-72 relative scrollbar-none overflow-y-auto pt-32">
      <ProjectList />
    </div>
  );
}
