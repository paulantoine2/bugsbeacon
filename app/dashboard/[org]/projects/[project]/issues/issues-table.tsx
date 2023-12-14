"use client";

import React from "react";
import {
  AreaChart,
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
import { formatDistanceToNowStrict } from "date-fns";
import { ExclamationCircleIcon, RewindIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Issue } from "@/types/issue";

export default function IssuesTable({ data }: { data: Issue[] }) {
  return (
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell>First seen</TableHeaderCell>
            <TableHeaderCell>Last seen</TableHeaderCell>
            <TableHeaderCell>Victims</TableHeaderCell>
            <TableHeaderCell>Events</TableHeaderCell>
            <TableHeaderCell className="text-right">
              Last 24 Hours
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Flex justifyContent="start" className="gap-2">
                  <Title>
                    <Link href={`issues/${row.id}`}>{row.exception_name}</Link>
                  </Title>
                  {row.is_crash && (
                    <Badge color="rose" icon={ExclamationCircleIcon} size="xs">
                      Crash
                    </Badge>
                  )}
                  {row.is_regression && (
                    <Badge color="purple" icon={RewindIcon} size="xs">
                      Regression
                    </Badge>
                  )}
                </Flex>

                {row.exception_message}
              </TableCell>
              <TableCell>
                <Text>{row.first_seen_version}</Text>
                <Text>
                  {formatDistanceToNowStrict(new Date(row.first_seen), {
                    addSuffix: true,
                  })}
                </Text>
              </TableCell>
              <TableCell>
                <Text>{row.last_seen_version}</Text>
                <Text>
                  {formatDistanceToNowStrict(new Date(row.last_seen), {
                    addSuffix: true,
                  })}
                </Text>
              </TableCell>
              <TableCell>{row.victims}</TableCell>
              <TableCell>{row.events}</TableCell>
              <TableCell width={250}>
                <Chart />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
function generateArray() {
  const array = [];
  let max = 0;
  for (let i = 1; i <= 24; i++) {
    const count = Math.floor(Math.random() * 51); // Génère un nombre aléatoire entre 0 et 50
    if (count > max) max = count;
    array.push({ index: i, count: count });
  }
  return { array, max };
}
function Chart() {
  const data = generateArray();
  return (
    <AreaChart
      className="h-10"
      data={data.array}
      index="index"
      categories={["count"]}
      colors={["orange"]}
      showXAxis={false}
      showGridLines={false}
      startEndOnly={false}
      showYAxis={false}
      showLegend={false}
    />
  );
}
