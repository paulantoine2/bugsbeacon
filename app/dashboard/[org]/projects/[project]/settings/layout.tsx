import Sidemenu from "@/components/sidemenu";
import { Col, Divider, Grid, Metric, Text } from "@tremor/react";
import Link from "next/link";

export default function ProjectSettingsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { org: string; project: string };
}) {
  const items = [
    {
      link: `/dashboard/${params.org}/projects/${params.project}/settings`,
      title: "General",
      strict: true,
    },
    {
      link: `/dashboard/${params.org}/projects/${params.project}/settings/keys`,
      title: "Project keys",
    },
  ];
  return (
    <div>
      <div className="py-10 border-b dark:border-dark-tremor-border">
        <Metric className="container">Project Settings</Metric>
      </div>
      <div className="container py-10">
        <Grid numItems={4} className="gap-8">
          <Sidemenu items={items} />
          <Col numColSpan={3}>{children}</Col>
        </Grid>
      </div>
    </div>
  );
}
