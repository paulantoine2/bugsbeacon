import {
  Button,
  Card,
  Flex,
  Grid,
  Metric,
  Subtitle,
  Text,
} from "@tremor/react";

import ProjectCard from "./project-card";
import { getProjects } from "@/app/supabase-server";
import Link from "next/link";

export default async function Projects({
  params,
}: {
  params: { org: string };
}) {
  const org = params.org;
  const projects = await getProjects(org);

  return (
    <div className="container min-h-screen py-10">
      <Flex>
        <Metric>Projects</Metric>
        <Link href={`/dashboard/${org}/projects/new`}>
          <Button>New project</Button>
        </Link>
      </Flex>

      <Grid numItemsMd={3} className="mt-10 gap-6">
        {projects?.length ? (
          projects?.map((project) => (
            <ProjectCard key={project.id} org={org} project={project} />
          ))
        ) : (
          <>
            <div></div>
            <Text className="text-center">
              You don&apos;t have any projects
            </Text>
            <div></div>
          </>
        )}
      </Grid>
    </div>
  );
}
