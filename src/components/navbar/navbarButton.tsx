"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

interface NavbarButtonProps extends React.ComponentProps<typeof Button> {
  className?: string;
  icon?: React.ReactNode;
  text?: string;
  href: string;
}

export default function NavbarButton({
  icon,
  href,
  text,
  className,
  ...props
}: NavbarButtonProps) {
  const path = usePathname();
  console.log(path);

  return (
    <Button
      asChild
      className={clsx(
        className,
        href === path
          ? "border bg-background shadow-xs  dark:bg-input/70 dark:border-input"
          : "!hover:border-1 dark:hover:bg-input/30 hover:border-gray-700",
        "rounded-full cursor-pointer h-full duration-500  "
      )}
      variant="outline"
      {...props}
    >
      <Link className="flex justify-center items-center" href={href}>
        {icon}
        {text}
      </Link>
    </Button>
  );
}
