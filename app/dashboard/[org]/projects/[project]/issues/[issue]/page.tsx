import TagCard from "@/components/tag-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TypographyH4 } from "@/components/ui/typography";
import { FRAMES } from "@/config/sandbox";
import { cn } from "@/lib/utils";
import {
  BookmarkFilledIcon,
  CalendarIcon,
  CaretSortIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CommitIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import {
  AreaChart,
  Card,
  Col,
  Flex,
  Grid,
  Icon,
  Metric,
  Text,
} from "@tremor/react";
import Link from "next/link";
import BrowsersCard from "./browsers-card";
import EventsCard from "./events-card";
import StackTraces from "./stack-traces";
import { TagIcon } from "@heroicons/react/solid";
import MetricsCards from "./metrics-cards";

const data = [
  {
    Month: "Jan 21",
    "Gross Volume": 2890,
    "Successful Payments": 2400,
    Customers: 4938,
  },
  {
    Month: "Feb 21",
    "Gross Volume": 1890,
    "Successful Payments": 1398,
    Customers: 2938,
  },
  // ...
  {
    Month: "Jan 22",
    "Gross Volume": 3890,
    "Successful Payments": 2980,
    Customers: 2645,
  },
];

export default function Issue() {
  return (
    <div className="py-6 flex flex-col gap-12">
      <div>
        <Grid numItemsLg={8} className="gap-6 ">
          <Col numColSpanLg={5}>
            <EventsCard />
          </Col>
          <Col numColSpanLg={3}>
            <BrowsersCard />
          </Col>
        </Grid>
      </div>
      <StackTraces />
    </div>
  );
}
