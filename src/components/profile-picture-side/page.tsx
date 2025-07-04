"use client";
import { CldImage } from "next-cloudinary";

export default function ProfilePictureArea() {
  return (
    <div className="h-full w-full border-2 flex-col flex justify-center items-center">
      <div className="w-[170px] border-2 flex justify-center items-center rounded-full h-[170px] ">
        <CldImage
          alt="profile picture"
          width={1000}
          height={1000}
          src="dotwvanej85ajcmz4c8c"
          crop="auto"
          gravity="north_east"
          style={{ borderRadius: "50%" }}
        />
      </div>

      <div className="flex mt-6 justify-center text-xl  items-center">
        Gurgaon/India
      </div>
    </div>
  );
}
