import {
  DateRangePicker,
  Metric,
  Select,
  SelectItem,
  Subtitle,
  TextInput,
} from "@tremor/react";
import IssuesTable from "./issues-table";
import { Issue } from "@/types/issue";
import { wait } from "@/api/utils";
import { getIssues } from "@/api/issues/routes";
import { getProjects } from "@/api/projects/routes";
import { notFound } from "next/navigation";

async function getData(slug: string): Promise<Issue[]> {
  const projects = await getProjects();

  const project = projects.find((p) => p.slug === slug);

  if (!project) return [];

  return getIssues({ project_id: project.id });
}

export default async function Issues({
  params,
}: {
  params: { project: string };
}) {
  const data = await getData(params.project);

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
