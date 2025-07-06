import Link from "next/link";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import SocialIconButton from "../homePage/text-content-side/social-icon-strip/social-icon-button";

export default async function ContactProfilesCard() {
  return (
    <div
      className={` bg-accent/60 w-full p-6 rounded-2xl shadow-lg dark:shadow-white/10 shadow-black/20   h-fit`}
    >
      <h1 className="font-mono lg:text-xl text-[16px] lg:text-start text-center font-extralight">
        We create beautiful, organized websites and web applications that
        empower you with full ownership and easy maintenance. Reach out to learn
        more.
      </h1>
      <h2 className="text-lg mt-6">
        {`Email: `}
        <Link
          className="dark:hover:text-blue-400 hover:text-blue-800 hover:underline-offset-2 duration-500 underline underline-offset-4"
          href={`mailto:hello@rishabyadav.com?subject=New%20Website%20/ %20Web%20App%20Project%20Inquiry&body=Hello,%0D%0A%0D%0AI'm%20reaching%20out%20from%20your%20website%20to%20discuss%20a%20potential%20project.%0D%0A%0D%0AHere%20are%20some%20initial%20details%20about%20what%20I'm%20looking%20for:%0D%0A%0D%0A1.%20Type%20of%20project:%0D%0A2.%20Brief%20description:%0D%0A3.%20Any%20specific%20features%20or%20technologies%20in%20mind:%0D%0A%0D%0AThank%20you!`}
        >
          hello@rishabyadav.com
        </Link>
      </h2>
      <div className="mt-8 gap-4  lg:gap-2.5 justify-center lg:justify-start flex">
        <SocialIconButton
          className=" lg:scale-100 scale-110 "
          href="https://x.com"
          icon={<BsTwitterX />}
          text="Twitter"
        />
        <SocialIconButton
          className="lg:scale-100 scale-110"
          href="https://www.linkedin.com/in/rishab-yadav-9785b5228/"
          icon={<BsLinkedin />}
          text="Linkedin"
        />
      </div>
    </div>
  );
}
