import ProfilePictureArea from "@/components/homePage/profile-picture-side/profile-picture-area";
import Education from "@/components/homePage/text-content-side/education-section/education";
import SkillsArea from "@/components/homePage/text-content-side/skill-section/skills";
import SocialIconList from "@/components/homePage/text-content-side/social-icon-strip/social-icon-list";

export default async function Home() {
  return (
    <div className="lg:flex w-full justify-center lg:pl-80 lg:pr-48 px-2  mb-40 lg:mb-0 mt-14 lg:mt-36">
      <div className="md:flex-1 mt-4 lg:sticky lg:top-24 flex w-full h-full">
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
          obsession with Next.js`}
        </div>

        <SkillsArea className=" bg-accent/20 backdrop-blur-lg shadow-inner shadow-black/15 dark:shadow-white/15 mb-6 border rounded-4xl  px-4 py-6" />

        <Education className=" bg-accent/20 backdrop-blur-lg shadow-inner shadow-black/15 dark:shadow-white/15 mb-6 border rounded-4xl  px-4 py-6" />
      </div>
    </div>
  );
}
