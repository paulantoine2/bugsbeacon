"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Tab, TabGroup, TabList } from "@tremor/react";

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
      <TabList className={className}>
        {items.map(({ link, title, icon, counter, strict }, i) => (
          <Link href={link} key={i}>
            <Tab>
              {title}
              {/* {counter && <Badge className="ml-2">{counter}</Badge>} */}
            </Tab>
          </Link>
        ))}
      </TabList>
    </TabGroup>
  );
}
