"use client";

import { Project } from "@/api/projects/routes";
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
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectCard({
  project,
  org,
}: {
  project: Project;
  org: string;
}) {
  return (
    <Card>
      <Image
        width={24}
        height={24}
        alt="favicon"
        src={`/projects/${project.id}.png`}
        className="mb-2"
      />
      <Title>{project.name}</Title>
      <Flex justifyContent="start" alignItems="baseline" className="space-x-2">
        <Metric>{project.total_events}</Metric>
        <Text>Error events</Text>
      </Flex>
      <AreaChart
        className="mt-6 h-28"
        data={project.events}
        index="date"
        categories={["events"]}
        colors={["orange"]}
        showXAxis={true}
        showGridLines={false}
        startEndOnly={true}
        showYAxis={false}
        showLegend={false}
      />
      <Link href={`${org}/projects/${project.slug}/issues`}>
        <Button
          size="sm"
          variant="light"
          iconPosition="right"
          className="mt-5"
          icon={ArrowRightIcon}
        >
          View issues
        </Button>
      </Link>
    </Card>
  );
}
