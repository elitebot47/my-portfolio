import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import SocialIconButton from "./social-icon-button";

export default async function SocialIconList() {
  return (
    <div className=" w-full flex justify-center md:justify-normal gap-2 h-full">
      <SocialIconButton
        href="https://github.com/elitebot47"
        icon={<BsGithub />}
        text="Github"
      />
      <SocialIconButton
        href="https://www.linkedin.com/in/rishab-yadav-9785b5228"
        icon={<BsLinkedin />}
        text="Linkedin"
      />
      <SocialIconButton
        href="https://x.com"
        icon={<BsTwitterX />}
        text="Twitter"
      />
    </div>
  );
}
