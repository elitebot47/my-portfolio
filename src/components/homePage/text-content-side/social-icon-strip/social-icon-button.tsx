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
      className={` ${className} border px-3 !h-10 md:!h-8 cursor-pointer hover:bg-input/50 rounded-full items-center dark:border-gray-700 border-gray-500/50 `}
      {...props}
      asChild
    >
      <Link className=" h-full " target="_blank" href={href}>
        <div className=" dark:!text-white !text-black">{icon}</div>
        <div className="hidden md:block">{text}</div>
      </Link>
    </Button>
  );
}
