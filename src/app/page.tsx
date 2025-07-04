import ProfilePictureArea from "@/components/homePage/profile-picture-side/profile-picture-area";
import SocialIconList from "@/components/homePage/text-content-area/social-icon-list";

export default async function Home() {
  return (
    <div className="flex  w-full  items-center justify-center px-80 border-2 mt-28">
      <div className="flex-1 flex  h-full justify-center">
        <ProfilePictureArea />
      </div>
      <div className={`flex-2 px-8  justify-start flex-col h-full`}>
        <div className="text-6xl">Rishab Yadav</div>
        <div className="text-4xl mb-6">Full Stack Web Developer</div>

        <SocialIconList />
      </div>
    </div>
  );
}
