import { Callout, Text, TextInput } from "@tremor/react";
import IssuesTable from "../../(list)/issues-table";
import { subDays } from "date-fns";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { getIssue, getIssues } from "@/api/issues/routes";
import { Issue } from "@/types/issue";
import { getProjects } from "@/api/projects/routes";
import { wait } from "@/api/utils";

async function getData(
  project_slug: string,
  issue_id: string
): Promise<Issue[]> {
  await wait();

  const projects = await getProjects();

  const project = projects.find((p) => p.slug === project_slug);

  if (!project) return [];

  const issues = await getIssues({ project_id: project.id });

  const issue = issues.find((issue) => issue.id === issue_id);

  if (!issue) return [];

  const related = issues.filter(
    (i) =>
      i.id !== issue.id &&
      i.issue_name === issue.issue_name &&
      i.issue_description === issue.issue_description
  );

  return related;
}

export default async function IssueRelated({
  params,
}: {
  params: { issue: string; project: string };
}) {
  const issues = await getData(params.project, params.issue);

  return (
    <div className="py-6 space-y-6">
      <Callout
        title="What are related issues ?"
        icon={InformationCircleIcon}
        color="orange"
      >
        Related issues have the same Error thrown but a different Stack trace.
        In other words, their stack trace have only the first frame in common.
      </Callout>
      <TextInput placeholder="Search related issues..." />
      <IssuesTable data={issues} />
    </div>
  );
}
