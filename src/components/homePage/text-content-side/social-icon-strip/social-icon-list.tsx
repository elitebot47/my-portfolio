import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import SocialIconButton from "./social-icon-button";

export default function SocialIconList() {
  return (
    <div className=" w-full flex my-7 lg:my-14 justify-center md:justify-normal lg:gap-2 gap-3 h-full">
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
