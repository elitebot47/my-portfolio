import ProfilePictureArea from "@/components/homePage/profile-picture-side/profile-picture-area";
import SkillsArea from "@/components/homePage/text-content-side/skill-section/skills";
import SocialIconList from "@/components/homePage/text-content-side/social-icon-strip/social-icon-list";
import { Separator } from "@/components/ui/separator";

export default async function Home() {
  return (
    <div className="lg:flex  w-full    justify-center md:px-80 px-2 border-2 mb-40 lg:mb-0 mt-14 lg:mt-28">
      <div className="md:flex-1 flex w-full h-full">
        <ProfilePictureArea />
      </div>
      <div
        className={`md:flex-2 md:px-8 w-full px-3 md:justify-start flex-col h-full`}
      >
        <div className="md:text-6xl flex justify-center md:justify-normal text-3xl">
          Rishab Yadav
        </div>
        <div className="md:text-4xl flex  justify-center md:justify-normal mb-6">
          Full Stack Web Developer
        </div>

        <SocialIconList />
        <div className=" mt-8 mb-9 text-xl">
          {`I'm a full-stack developer, and I love building cool stuff and trying
          out new ideas. I've worked on a bunch of projects, and I have a little
          obsession with Next.js..`}
        </div>
        <Separator
          orientation="horizontal"
          className="w-full my-3 h-2 bg-gray-700"
        />
        <SkillsArea />
        <Separator
          orientation="horizontal"
          className="w-full my-3 h-2 bg-gray-700"
        />
      </div>
    </div>
  );
}
