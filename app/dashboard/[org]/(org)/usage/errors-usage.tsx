"use client";

import {
  BarChart,
  Card,
  Flex,
  Metric,
  ProgressCircle,
  Text,
  Title,
} from "@tremor/react";
import React from "react";
import { faker } from "@faker-js/faker";
import { format, subDays } from "date-fns";
function generateData() {
  return new Array(30)
    .fill(1)
    .map((_, i) => {
      const Errors = faker.number.int(100);
      const Dropped = faker.helpers.arrayElement([
        0,
        0,
        faker.number.int(Errors),
      ]);
      const Accepted = Errors - Dropped;
      return {
        Range: format(subDays(new Date(), i), "d MMM"),
        Accepted,
        Dropped,
      };
    })
    .reverse();
}

const data = generateData();

export default function ErrorsUsage() {
  return (
    <Card className="mt-10">
      <Flex className="border-b border-tremor-border dark:border-dark-tremor-border pb-6 mb-6">
        <div>
          <Title>Number of Error events</Title>
          <Text>
            The number of exceptions that were captured across all of your
            projects.
          </Text>
        </div>
        <Flex justifyContent="end" className="gap-2 w-auto">
          <Text>1654 / 50000</Text>
          <ProgressCircle value={4} size="sm" />
        </Flex>
      </Flex>
      <Metric>1654</Metric>
      <BarChart
        className="mt-4 h-80"
        data={data}
        index="Range"
        categories={["Accepted", "Dropped"]}
        colors={["orange", "zinc"]}
        stack={true}
        yAxisWidth={60}
      />
    </Card>
  );
}
