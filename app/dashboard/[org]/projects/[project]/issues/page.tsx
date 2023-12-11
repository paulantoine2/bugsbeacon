import SANDBOX from "@/config/sandbox";
import Link from "next/link";

import { TypographyH2 } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarIcon, CaretDownIcon } from "@radix-ui/react-icons";
import {
  DateRangePicker,
  Metric,
  MultiSelect,
  Select,
  SelectItem,
  Subtitle,
  TextInput,
  Title,
} from "@tremor/react";
import IssuesTable from "./issues-table";
import { Issue } from "@/types/issue";

async function getData({ params }: { params: any }): Promise<Issue[]> {
  // Fetch data from your API here.
  return SANDBOX.orgs[params.org]?.projects[params.project]?.issues;
}

export default async function Issues({ params }: { params: any }) {
  const data = await getData({ params });

  return (
    <div className="container py-10 min-h-screen">
      <Metric>Issues</Metric>
      <Subtitle>
        Exceptions are grouped by issues based on their name and stack trace.
      </Subtitle>
      <div className="space-y-6 mt-10 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center space-x-2">
            <TextInput placeholder="Search issues..." className="flex-1" />
            <DateRangePicker
              className="max-w-sm mx-auto"
              enableSelect={false}
            />

            <Select value="all" enableClear={false} className="w-auto">
              <SelectItem value="all">All Versions</SelectItem>
            </Select>
          </div>
        </div>
      </div>
      <IssuesTable data={data} />
    </div>
  );
}
