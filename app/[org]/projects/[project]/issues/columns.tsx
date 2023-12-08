"use client";

import Chart from "@/components/chart";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  BookmarkFilledIcon,
  CommitIcon,
  CrossCircledIcon,
} from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import {
  format,
  formatDistance,
  formatDistanceToNowStrict,
  formatRelative,
  subDays,
} from "date-fns";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Issue = {
  id: string;
  title?: string;
  exception_name: string;
  exception_message: string;
  is_crash: boolean;
  is_regression: boolean;
  events: number;
  victims: number;
  last_seen: string;
  last_seen_version: string;
  first_seen: string;
  first_seen_version: string;
};

export const columns: ColumnDef<Issue>[] = [
  {
    id: "select",
    size: 32,
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    id: "title",
    size: 800,
    cell: ({ row }) => {
      return (
        <div className="flex flex-row">
          <CrossCircledIcon className="text-red-500 mt-[2px] mr-2 w-5 h-5" />

          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <Link
                href={`issues/${row.original.id}`}
                className="text-base font-semibold tracking-tight"
              >
                {row.original.exception_name}
              </Link>
              <span className="text-muted-foreground">
                getCount in src/index.ts
              </span>
            </div>

            <div className="text-sm ">{row.original.exception_message}</div>
            {/* <div>getCount in src/index.ts</div> */}
            {/* <div className="flex gap-1 mt-1">
            <div className="">2 hour(s) ago</div>
            {row.original.is_crash && (
              <Badge className="bg-red-500">Component Crash</Badge>
            )}
            {row.original.is_regression && (
              <Badge className="bg-purple-500">Regression</Badge>
            )}
          </div> */}
          </div>
        </div>
      );
    },
  },
  {
    id: "first_seen",
    header: "First seen",
    size: 200,
    cell: ({ row }) => (
      <div className="text-left text-muted-foreground">
        <Link
          href={`issues/${row.original.id}/victims`}
          className="font-normal font-mono flex flex-row items-center gap-1"
        >
          <CommitIcon className="h-4 w-4" />
          {row.original.first_seen_version}
        </Link>
        <div className=" ">
          {formatDistanceToNowStrict(new Date(row.original.first_seen), {
            addSuffix: true,
          })}
        </div>
      </div>
    ),
  },
  {
    id: "last_seen",
    header: "Last seen",
    size: 200,
    cell: ({ row }) => (
      <div className="text-left text-muted-foreground">
        <Link
          href={`issues/${row.original.id}/victims`}
          className="font-normal font-mono flex flex-row items-center gap-1"
        >
          <CommitIcon className="h-4 w-4" />
          {row.original.last_seen_version}
        </Link>
        <div className=" ">
          {formatDistanceToNowStrict(new Date(row.original.last_seen), {
            addSuffix: true,
          })}
        </div>
      </div>
    ),
  },

  {
    accessorKey: "victims",
    size: 100,
    header: "Victims",
    cell: ({ row }) => (
      <div className="text-left">
        <Link
          href={`issues/${row.original.id}/victims`}
          className="text-base text-muted-foreground "
        >
          {row.getValue("victims")}
        </Link>
      </div>
    ),
  },
  {
    accessorKey: "events",
    size: 100,
    header: "Events",
    cell: ({ row }) => (
      <div className="text-left">
        <Link
          href={`issues/${row.original.id}/events`}
          className="text-base text-muted-foreground "
        >
          {row.getValue("events")}
        </Link>
      </div>
    ),
  },
  {
    id: "chart",
    size: 200,
    header: "Last 24 Hours",
    cell: ({ row }) => <Chart width={200} height={40} />,
  },
];
