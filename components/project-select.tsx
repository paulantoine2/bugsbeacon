"use client";

import { useRouter, useSelectedLayoutSegments } from "next/navigation";
import React from "react";

import { Select, SelectItem } from "@tremor/react";
import { Project } from "@/api/projects/routes";

export default function ProjectSelect({ projects }: { projects: Project[] }) {
  const segment = useSelectedLayoutSegments();
  const router = useRouter();

  const project_slug = segment[0] === "projects" && segment[1];
  const selected = projects.find((p) => p.slug === project_slug);

  if (!selected || !project_slug) return null;

  const handleChange = (val: string) => {
    const { pathname } = window.location;
    const parts = pathname.split("/").slice(0, 4);
    parts.push(val);
    router.push(parts.join("/"));
  };

  return (
    <>
      <span>/</span>
      <Select
        className="max-w-xs ml-4"
        value={project_slug}
        enableClear={false}
        onValueChange={handleChange}
        icon={() => (
          <img src={`/projects/${selected.id}.png`} className="w-5 h-5" />
        )}
      >
        {projects.map((project) => (
          <SelectItem
            key={project.id}
            value={project.slug}
            icon={() => (
              <img src={`/projects/${project.id}.png`} className="w-5 h-5" />
            )}
          >
            {project.name}
          </SelectItem>
        ))}
      </Select>
    </>
  );
}
