import { Col, Divider, Grid, Metric } from "@tremor/react";

export default function ProjectSettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <Metric className="py-10">Project Settings</Metric>

      {children}
    </div>
  );
}
