"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
interface SocialButtonProps extends React.ComponentProps<typeof Button> {
  className?: string;
  icon: React.ReactNode;
  text: string;
  href: string;
}
export default function SocialIconButton({
  icon,
  text,
  className,
  href,
  ...props
}: SocialButtonProps) {
  return (
    <Button
      variant={`outline`}
      className={` ${className} border-1 px-3 !h-8 cursor-pointer hover:bg-input/50 rounded-full items-center border-gray-700`}
      {...props}
      asChild
    >
      <Link className=" h-full " target="_blank" href={href}>
        <div className="dark:!text-white !text-black">{icon}</div>
        {text}
      </Link>
    </Button>
  );
}
