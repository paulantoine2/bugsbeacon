"use client";

import { FRAMES } from "@/config/sandbox";
import {
  ExclamationCircleIcon,
  ShareIcon,
  TagIcon,
} from "@heroicons/react/outline";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
  Badge,
  Flex,
  SearchSelect,
  SearchSelectItem,
  Select,
  SelectItem,
  Tab,
  TabGroup,
  TabList,
  Text,
  Title,
} from "@tremor/react";
import React from "react";

export default function StackTraces() {
  return (
    <div>
      <Flex className="w-full mb-6">
        <Title>Stack traces</Title>
        <Flex className="gap-2 w-auto">
          <SearchSelect
            className="w-auto"
            value="3.3.0"
            enableClear={false}
            icon={TagIcon}
          >
            <SearchSelectItem value={"3.0.1"}>3.0.1</SearchSelectItem>
            <SearchSelectItem value={"3.3.0"}>
              3.3.0 (Most recent)
            </SearchSelectItem>
          </SearchSelect>
          <Select
            className="w-auto"
            value="a"
            enableClear={false}
            icon={ShareIcon}
          >
            <SelectItem value={"a"}>Variant A</SelectItem>
            <SelectItem value={"b"}>Variant B</SelectItem>
          </Select>
          <TabGroup className="w-auto" defaultValue="pretty">
            <TabList variant="solid">
              <Tab value="pretty">Pretty</Tab>
              <Tab value="raw">Raw</Tab>
            </TabList>
          </TabGroup>
        </Flex>
      </Flex>

      <AccordionList>
        {FRAMES.map((frame, i) => (
          <Accordion key={i} defaultOpen={i === 0}>
            <AccordionHeader>
              <Flex justifyContent="start" className="gap-1">
                <Text className="text-tremor-content-emphasis font-medium">
                  {frame.call}
                </Text>
                <Text>in</Text>
                <Text className="text-tremor-content-emphasis font-medium">
                  {frame.filename}
                </Text>
                <Text>at</Text>
                <Text className="text-tremor-content-emphasis font-medium">
                  line {frame.lineno}:{frame.colno}
                </Text>
              </Flex>
              {i === 0 && <Badge color="slate">Cause</Badge>}
              {i === FRAMES.length - 1 && (
                <Badge color="rose" icon={ExclamationCircleIcon}>
                  Crash
                </Badge>
              )}
            </AccordionHeader>
            <AccordionBody>
              <div className="flex flex-col gap-1 font-mono text-sm py-1 text-muted-foreground">
                {Object.keys(frame.code).map((lineno) => (
                  <div
                    key={lineno}
                    className={
                      "px-4 flex gap-2" +
                      (frame.lineno === +lineno
                        ? " bg-tremor-brand text-tremor-brand-inverted font-medium"
                        : "")
                    }
                  >
                    <span className="w-14">{lineno}</span>
                    <span className="whitespace-pre">
                      {frame.code[+lineno]}
                    </span>
                  </div>
                ))}
              </div>
            </AccordionBody>
          </Accordion>
        ))}
      </AccordionList>

      {/* <div className="grid grid-flow-col grid-cols-4 gap-6 min-h-[500px]">

        <div className="col-span-3">
          <Card>
            {FRAMES.map((frame, i) => (
              <Collapsible key={i} className={cn(i !== 0 && "border-t")}>
                <div className="flex items-center py-2 px-4">
                  <div className="flex-1 flex text-sm gap-1">
                    <span>{frame.call}</span>
                    <span className="text-muted-foreground">in</span>
                    <span>{frame.filename}</span>
                    <span className="text-muted-foreground">at</span>
                    <span>
                      line {frame.lineno}:{frame.colno}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {i === 0 && (
                      <Badge variant="outline">
                        <BookmarkFilledIcon className="text-orange-500 mr-2" />
                        Cause
                      </Badge>
                    )}
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" size="icon">
                        <ChevronDownIcon className="h-4 w-4" />
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                </div>
                <CollapsibleContent asChild>
                  <div className="flex flex-col gap-1 font-mono text-sm py-1 border-t bg-muted text-muted-foreground">
                    {Object.keys(frame.code).map((lineno) => (
                      <div
                        key={lineno}
                        className={cn(
                          "px-4 flex gap-2",
                          frame.lineno === +lineno &&
                            "bg-primary text-primary-foreground font-medium"
                        )}
                      >
                        <span className="w-14">{lineno}</span>
                        <span className="whitespace-pre">
                          {frame.code[lineno]}
                        </span>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </Card>
        </div>
      </div>*/}
    </div>
  );
}
