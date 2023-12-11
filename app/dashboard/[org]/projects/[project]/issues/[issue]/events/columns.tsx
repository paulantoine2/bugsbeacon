"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { faker } from "@faker-js/faker";
import { RocketIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import Link from "next/link";

export type Event = {
  id: string;
  browser_name: string;
  browser_version: string;
  user: string;
  timestamp: string;
  version: string;
  is_crash: boolean;
  environment: string;
  variant: number;
};

export const events: Event[] = new Array(20).fill(1).map((v) => ({
  id: faker.string.uuid(),
  browser_name: faker.helpers.arrayElement([
    "Chrome",
    "Firefox",
    "Safari",
    "Edge",
  ]),
  browser_version: faker.number.int(100) + "",
  is_crash: faker.datatype.boolean(),
  timestamp: faker.date.past().toISOString(),
  user: faker.internet.email(),
  version: faker.system.semver(),
  environment: faker.helpers.arrayElement(["production", "preview"]),
  variant: faker.number.int(2),
}));

const browserIcons = {
  Edge: "/browser/edge.svg",
};

export const columns: ColumnDef<Event>[] = [
  {
    id: "id",
    accessorKey: "id",
    header: "Id",
    cell: ({ row }) => (
      <Link href="?id" className="font-medium hover:underline">
        {(row.getValue("id") as string).split("-")[0]}
      </Link>
    ),
    size: 100,
  },
  {
    id: "user",
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => <div className="truncate">{row.getValue("user")}</div>,
  },
  {
    id: "browser_name",
    accessorKey: "browser_name",
    header: "Browser",
    cell: ({ row }) => (
      <div className="flex flex-row gap-2 items-center">
        <Avatar className="h-5 w-5">
          <AvatarImage
            src={`/browser/${(
              row.getValue("browser_name") as string
            ).toLowerCase()}.svg`}
          />
        </Avatar>
        {row.getValue("browser_name")}
      </div>
    ),
  },
  {
    id: "browser_version",
    accessorKey: "browser_version",
    header: "",
  },
  {
    id: "version",
    accessorKey: "version",
    header: "Version",
    cell: ({ row }) => (
      <Link className="font-mono font-medium hover:underline" href="">
        {row.getValue("version")}
      </Link>
    ),
  },
  {
    id: "timestamp",
    accessorKey: "timestamp",
    header: "Timestamp",
    cell: ({ row }) => (
      <div className="text-xs font-mono truncate text-right">
        {format(new Date(row.getValue("timestamp")), "LLL dd HH:mm:ss")}
      </div>
    ),
  },
];
