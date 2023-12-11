"use client";
import { faker } from "@faker-js/faker";
import { StatusOnlineIcon, TagIcon } from "@heroicons/react/solid";
import {
  Badge,
  Card,
  Flex,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";
import { format } from "date-fns";
import React from "react";
import { browser_icons } from "../browser-icons";
import { ExclamationCircleIcon } from "@heroicons/react/outline";

export type Event = {
  id: string;
  browser_name: string;
  browser_version: string;
  user: string;
  timestamp: string;
  version: string;
  is_crash: boolean;
  is_handled: boolean;
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
  is_handled: faker.datatype.boolean(),
  timestamp: faker.date.past().toISOString(),
  user: faker.helpers.arrayElement([faker.internet.email(), "unknown"]),
  version: faker.system.semver(),
  environment: faker.helpers.arrayElement(["production", "preview"]),
  variant: faker.number.int(2),
}));

export default function EventsTable() {
  return (
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Event ID</TableHeaderCell>
            <TableHeaderCell>User</TableHeaderCell>
            <TableHeaderCell>Browser</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
            <TableHeaderCell className="text-right">
              App Version
            </TableHeaderCell>
            <TableHeaderCell>Type</TableHeaderCell>
            <TableHeaderCell>Handled</TableHeaderCell>
            <TableHeaderCell className="text-right">Timestamp</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id.split("-")[0]}</TableCell>
              <TableCell>{row.user}</TableCell>
              <TableCell>
                <Flex justifyContent="start">
                  {browser_icons[row.browser_name.toLowerCase()]}
                  {row.browser_name}
                </Flex>
              </TableCell>
              <TableCell>{row.browser_version}</TableCell>
              <TableCell className="text-right">
                <Flex justifyContent="end">
                  <TagIcon className="h-4 w-4 mr-2" />
                  {row.version}
                </Flex>
              </TableCell>
              <TableCell className="text-right">
                {row.is_crash && (
                  <Badge
                    color="rose"
                    icon={ExclamationCircleIcon}
                    tooltip="This exception caused a component crash"
                  >
                    Crash
                  </Badge>
                )}
              </TableCell>
              <TableCell className="text-right">
                {row.is_handled ? (
                  <Badge color="green">Handled</Badge>
                ) : (
                  <Badge color="orange">Unhandled</Badge>
                )}
              </TableCell>
              <TableCell className="text-right">
                {format(new Date(row.timestamp), "LLL dd HH:mm:ss")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
