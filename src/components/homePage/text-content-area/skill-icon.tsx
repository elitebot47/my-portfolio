import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import React from "react";

export default function SkillIcon({
  name,
  className,
  icon,
}: {
  name: string;
  className?: string;
  icon: React.ReactNode;
}) {
  return (
    <Badge className={clsx(className)} variant="default">
      <div>{name}</div>
      <div>{icon}</div>
    </Badge>
  );
}
