import SANDBOX from "@/config/sandbox";
import { Metric } from "@tremor/react";

import ProjectCard from "./project-card";

export default function Projects({ params }: { params: any }) {
  const org = params.org;
  return (
    <div className="container min-h-screen py-10">
      <Metric>Projects</Metric>

      <div className="grid grid-flow-col grid-cols-3 gap-6 mt-10">
        {Object.keys(SANDBOX.orgs[org]?.projects).map((project_slug, i) => (
          <ProjectCard key={i} org={org} slug={project_slug} />
        ))}
      </div>
    </div>
  );
}
