import ProjectList from "@/components/workPage/projects-list";

export default async function WorkPage() {
  return (
    <div className="w-full h-full  flex justify-center relative px-2 scroll-smooth scrollbar-none  lg:pt-32 pb-32 lg:pb-12 pt-24">
      <div className="h-auto w-fit">
        <ProjectList />
      </div>
    </div>
  );
}
