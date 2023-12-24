"use client";

import {
  AreaChart,
  Card,
  DateRangePicker,
  DateRangePickerItem,
  Flex,
  Metric,
  Text,
  Title,
} from "@tremor/react";
import { subDays, format } from "date-fns";
import React from "react";

function generateArray() {
  const array = [];
  let max = 0;
  for (let i = 0; i <= 30; i++) {
    const count = Math.floor(Math.random() * 51); // Génère un nombre aléatoire entre 0 et 50
    if (count > max) max = count;
    const crash = Math.floor((Math.random() * count) / 2);
    array.unshift({
      index: i,
      count,
      crash,
      date: format(subDays(new Date(), i), "LLL dd"),
    });
  }
  return { array, max };
}

const data = generateArray();

export default function EventsCard() {
  return (
    <Card>
      <Flex alignItems="start">
        <div>
          <Title>Events</Title>
          <Flex
            justifyContent="start"
            alignItems="baseline"
            className="truncate space-x-3"
          >
            <Metric>769</Metric>
            <Text className="truncate">and 678 crashes</Text>
          </Flex>
        </div>
        <DateRangePicker defaultValue={{ selectValue: "30d" }}>
          <DateRangePickerItem
            key="30d"
            value="30d"
            from={subDays(new Date(), 30)}
          >
            Last 30 Days
          </DateRangePickerItem>
          <DateRangePickerItem
            key="7d"
            value="7d"
            from={subDays(new Date(), 7)}
          >
            Last 7 Days
          </DateRangePickerItem>
          <DateRangePickerItem
            key="24h"
            value="24h"
            from={subDays(new Date(), 1)}
          >
            Last 24 Hours
          </DateRangePickerItem>
        </DateRangePicker>
      </Flex>

      <AreaChart
        className="mt-8 h-[311px]"
        data={data.array}
        index="date"
        categories={["crash", "count"]}
        colors={["rose", "orange"]}
        showYAxis={true}
        showLegend={true}
        startEndOnly
        yAxisWidth={30}
      />
    </Card>
  );
}
