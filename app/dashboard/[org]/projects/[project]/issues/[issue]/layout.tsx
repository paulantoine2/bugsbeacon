import Submenu from "@/components/submenu";

import { Badge, Grid, Metric, Subtitle } from "@tremor/react";
import Actions from "./actions";
import MetricsCards from "./metrics-cards";
import { wait } from "@/api/utils";
import { Issue } from "@/types/issue";
import { getIssue } from "@/api/issues/routes";
import { notFound } from "next/navigation";

export default async function IssueLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { org: string; project: string; issue: string };
}) {
  const items = [
    {
      title: "Overview",
      link: `/dashboard/${params.org}/projects/${params.project}/issues/${params.issue}`,
      strict: true,
    },
    {
      title: "Events",
      link: `/dashboard/${params.org}/projects/${params.project}/issues/${params.issue}/events`,
    },
    {
      title: "Related",
      link: `/dashboard/${params.org}/projects/${params.project}/issues/${params.issue}/related`,
    },
  ];

  const issue = null;

  if (!issue) return notFound();

  return (
    <div className="container min-h-screen">
      <div className="py-10 flex flex-row items-start">
        <div className="flex-1">
          <Metric>{issue.issue_name}</Metric>
          <Subtitle>{issue.issue_description}</Subtitle>
          <div className="flex gap-2 mt-2">
            {issue.has_crash && (
              <Badge color="rose" size="xs">
                Crash
              </Badge>
            )}
            {issue.is_regression && (
              <Badge color="purple" size="xs">
                Regression
              </Badge>
            )}
          </div>
        </div>
        <Actions />
      </div>
      <Grid numItemsLg={8} className="gap-6 pb-10">
        <MetricsCards issue={issue} />
      </Grid>
      <Submenu items={items} />
      {children}
    </div>
  );
}
