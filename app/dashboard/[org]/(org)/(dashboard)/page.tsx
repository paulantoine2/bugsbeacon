import { Card, Grid, Metric, Subtitle } from "@tremor/react";

import ProjectCard from "./project-card";
import { getProjects } from "@/api/projects/routes";

export default async function Projects({ params }: { params: any }) {
  const org = params.org;
  const projects = await getProjects();

  return (
    <div className="container min-h-screen py-10">
      <Metric>Projects</Metric>

      <Grid numItemsMd={3} className="mt-10 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} org={org} project={project} />
        ))}
      </Grid>
    </div>
  );
}
