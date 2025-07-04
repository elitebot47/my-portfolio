import ProfilePictureArea from "@/components/homePage/profile-picture-side/profile-picture-area";
import SocialIconList from "@/components/homePage/text-content-area/social-icon-list";

export default async function Home() {
  return (
    <div className="lg:flex  w-full  items-center justify-center md:px-80 px-2 border-2 mt-28">
      <div className="md:flex-1 flex w-full h-full justify-center">
        <ProfilePictureArea />
      </div>
      <div
        className={`md:flex-2 md:px-8 w-full  md:justify-start flex-col h-full`}
      >
        <div className="md:text-6xl flex justify-center md:justify-normal text-3xl">
          Rishab Yadav
        </div>
        <div className="md:text-4xl flex justify-center md:justify-normal mb-6">
          Full Stack Web Developer
        </div>

        <SocialIconList />
      </div>
    </div>
  );
}
