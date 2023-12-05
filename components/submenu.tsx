"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export default function Submenu({
  items,
  className,
}: {
  className?: string;
  items: {
    link: string;
    title: string;
    counter?: number;
    strict?: boolean;
    icon?: React.ReactNode;
  }[];
}) {
  const pathname = usePathname();

  return (
    <nav className={cn("border-b flex", className)}>
      {items.map(({ link, title, icon, counter, strict }, i) => (
        <div
          key={i}
          className={cn(
            "py-1",
            pathname === link || (!strict && pathname.startsWith(link))
              ? "border-b-2 border-primary"
              : "text-muted-foreground "
          )}
        >
          <Button asChild variant="ghost">
            <Link href={link}>
              {icon}
              {title}
              {counter && (
                <Badge className="ml-2" variant="outline">
                  {counter}
                </Badge>
              )}
            </Link>
          </Button>
        </div>
      ))}
    </nav>
  );
}
