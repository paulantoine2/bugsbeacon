"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Col, Text } from "@tremor/react";

export default function Sidemenu({
  items,
}: {
  items: {
    link: string;
    title: string;
    strict?: boolean;
  }[];
}) {
  const pathname = usePathname();

  const index = items.findIndex(
    (item) =>
      pathname === item.link || (!item.strict && pathname.startsWith(item.link))
  );

  return (
    <Col className="flex flex-col">
      {items.map(({ link, title }, i) => (
        <Link
          href={link}
          key={i}
          className={
            "p-3 rounded-tremor-default dark:hover:bg-dark-tremor-brand-muted dark:hover:text-dark-tremor-content-emphasis" +
            (index === i ? " dark:bg-dark-tremor-brand-subtle" : "")
          }
        >
          <Text
            className={
              "transition-colors " +
              (index === i ? " dark:text-dark-tremor-content-emphasis" : "")
            }
          >
            {title}
          </Text>
        </Link>
      ))}
    </Col>
  );
}
