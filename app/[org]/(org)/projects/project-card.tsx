"use client";

import { ArrowRightIcon } from "@heroicons/react/solid";
import {
  AreaChart,
  Button,
  Card,
  Flex,
  Metric,
  Text,
  Title,
} from "@tremor/react";
import Link from "next/link";
import React from "react";

function generateArray() {
  const array = [];
  let max = 0;
  for (let i = 1; i <= 30; i++) {
    const count = Math.floor(Math.random() * 51); // Génère un nombre aléatoire entre 0 et 50
    if (count > max) max = count;
    array.push({ index: i, count: count });
  }
  return { array, max };
}

const data = generateArray();

export default function ProjectCard({ slug }: { slug: string }) {
  return (
    <Card>
      <Title>react-app</Title>
      <Flex justifyContent="start" alignItems="baseline" className="space-x-2">
        <Metric>678</Metric>
        <Text>Error events</Text>
      </Flex>
      <AreaChart
        className="mt-6 h-28"
        data={data.array}
        index="index"
        categories={["count"]}
        colors={["cyan"]}
        showXAxis={true}
        showGridLines={false}
        startEndOnly={true}
        showYAxis={false}
        showLegend={false}
      />
      <Button
        size="sm"
        variant="light"
        iconPosition="right"
        color="slate"
        className="mt-5"
        icon={ArrowRightIcon}
      >
        <Link href={`projects/${slug}/issues`}>View issues</Link>
      </Button>
    </Card>
  );
}
