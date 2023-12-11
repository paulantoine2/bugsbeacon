"use client";

import {
  Card,
  Title,
  TabGroup,
  TabList,
  Tab,
  Flex,
  Bold,
  BarList,
  Text,
} from "@tremor/react";
import React, { useState } from "react";
import {
  ChromeIcon,
  EdgeIcon,
  SafariIcon,
  FirefoxIcon,
  OperaIcon,
  ArcIcon,
} from "./browser-icons";

const categories = [
  { key: "type", name: "Type" },
  { key: "version", name: "Version" },
];

const typeEvents = [
  {
    name: "Chrome",
    value: 652,
    icon: ChromeIcon,
  },
  {
    name: "Edge",
    value: 134,
    icon: EdgeIcon,
  },
  {
    name: "Safari",
    value: 542,
    icon: SafariIcon,
  },
  {
    name: "Firefox",
    value: 234,
    icon: FirefoxIcon,
  },
  {
    name: "Opera",
    value: 12,
    icon: OperaIcon,
  },
  {
    name: "Arc",
    value: 7,
    icon: ArcIcon,
  },
];

const versionEvents = [
  { name: "Chrome 109", value: 456, icon: ChromeIcon },
  { name: "Chrome 108", value: 271, icon: ChromeIcon },
  { name: "Safari 13", value: 46, icon: SafariIcon },
  { name: "Firefox 143", value: 191, icon: FirefoxIcon },
  { name: "Firefox 142", value: 82, icon: FirefoxIcon },
  { name: "Arc", value: 15, icon: ArcIcon },
];

const events = {
  type: typeEvents,
  version: versionEvents,
};

const sortData = (data: { name: string; value: number }[]) =>
  data.sort((a, b) => {
    if (a.value < b.value) return 1;
    if (a.value > b.value) return -1;
    return 0;
  });

export default function BrowsersCard() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedCategory = selectedIndex === 0 ? "type" : "version";
  return (
    <Card className="max-w-md mx-auto">
      <Title>Browsers</Title>
      <TabGroup
        index={selectedIndex}
        onIndexChange={setSelectedIndex}
        className="mt-6"
      >
        <TabList>
          {categories.map((category) => (
            <Tab key={category.key} value={category.key}>
              {category.name}
            </Tab>
          ))}
        </TabList>
      </TabGroup>
      <Flex className="mt-6">
        <Text>
          <Bold>Name</Bold>
        </Text>
        <Text>
          <Bold>Events</Bold>
        </Text>
      </Flex>
      <BarList
        data={sortData(events[selectedCategory])}
        showAnimation={false}
        className="mt-4"
      />
    </Card>
  );
}
