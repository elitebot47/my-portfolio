import ProjectList from "@/components/workPage/projects-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Rishab Yadav",
  description:
    "Explore the modern web applications and projects built by Rishab Yadav, showcasing expertise in Next.js, TypeScript, React, and more.",
};
export default async function WorkPage() {
  return (
    <div className="w-full h-full  flex justify-center relative px-2 scroll-smooth scrollbar-none  lg:pt-32 pb-32 lg:pb-12 pt-24">
      <div className="h-auto w-fit">
        <ProjectList />
      </div>
    </div>
  );
}
