"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { Badge, Tab, TabGroup, TabList } from "@tremor/react";

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
    <TabGroup
      index={items.findIndex(
        (item) =>
          pathname === item.link ||
          (!item.strict && pathname.startsWith(item.link))
      )}
    >
      <TabList className={cn(className)}>
        {items.map(({ link, title, icon, counter, strict }, i) => (
          <Tab key={i}>
            <Link href={link}>
              {title}
              {counter && <Badge className="ml-2">{counter}</Badge>}
            </Link>
          </Tab>
        ))}
      </TabList>
    </TabGroup>
  );
}
