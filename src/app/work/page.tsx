import ProjectList from "@/components/workPage/projects-list";

export default async function WorkPage() {
  return (
    <div className="w-full h-full lg:px-72 relative px-2 scroll-smooth scrollbar-none overflow-y-auto lg:pt-32 pb-32 lg:pb-12 pt-12">
      <div className="h-auto">
        <ProjectList />
      </div>
    </div>
  );
}
