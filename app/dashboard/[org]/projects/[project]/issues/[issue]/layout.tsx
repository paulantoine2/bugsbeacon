import Submenu from "@/components/submenu";

import { Badge, Grid, Metric, Subtitle } from "@tremor/react";
import Actions from "./actions";
import MetricsCards from "./metrics-cards";

export default function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
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
      counter: 769,
    },
    {
      title: "Related",
      link: `/dashboard/${params.org}/projects/${params.project}/issues/${params.issue}/related`,
      counter: 4,
    },
  ];

  return (
    <div className="container min-h-screen">
      <div className="py-10 flex flex-row items-start">
        <div className="flex-1">
          <Metric>TypeError</Metric>
          <Subtitle>Cannot read value (func) of undefined</Subtitle>
          <div className="flex gap-2 mt-2">
            <Badge color="rose" size="xs">
              Crash
            </Badge>
            <Badge color="purple" size="xs">
              Regression
            </Badge>
          </div>
        </div>
        <Actions />
      </div>
      <Grid numItemsLg={8} className="gap-6 pb-10">
        <MetricsCards />
      </Grid>
      <Submenu items={items} />
      {children}
    </div>
  );
}
