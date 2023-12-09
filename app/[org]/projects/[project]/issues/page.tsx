import SANDBOX from "@/config/sandbox";
import Link from "next/link";

import { Issue, columns } from "./columns";
import { DataTable } from "./data-table";
import { TypographyH2 } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarIcon, CaretDownIcon } from "@radix-ui/react-icons";
import { DateRangePicker, MultiSelect } from "@tremor/react";

async function getData({ params }: { params: any }): Promise<Issue[]> {
  // Fetch data from your API here.
  return SANDBOX.orgs[params.org]?.projects[params.project]?.issues;
}

export default async function Issues({ params }: { params: any }) {
  const data = await getData({ params });

  return (
    <div className="container py-10 space-y-10 min-h-screen">
      <TypographyH2>Issues</TypographyH2>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center space-x-2">
            <Input placeholder="Search issues..." className="h-9 flex-1" />
            <DateRangePicker
              className="max-w-sm mx-auto"
              enableSelect={false}
            />
            <MultiSelect></MultiSelect>
            <Button variant="outline">
              All Versions
              <CaretDownIcon className="ml-2" />
            </Button>
          </div>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
