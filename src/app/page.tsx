import ProfilePictureArea from "@/components/profile-picture-side/page";

export default function Home() {
  return (
    <div className="flex  w-full  items-center justify-center px-80 border-2 mt-28">
      <div className="flex-1 flex h-full justify-center">
        <ProfilePictureArea />
      </div>
      <div className={`flex-3 flex h-full`}>Rishab Yadav</div>
    </div>
  );
}
