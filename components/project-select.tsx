"use client";

import { useRouter, useSelectedLayoutSegments } from "next/navigation";
import React from "react";

import { Select, SelectItem } from "@tremor/react";
import { Project } from "@/types/project";

export default function ProjectSelect({ projects }: { projects: Project[] }) {
  const segment = useSelectedLayoutSegments();
  const router = useRouter();

  const selected_id = segment[0] === "projects" && segment[1];
  const selected = projects.find((p) => p.id === selected_id);

  if (!selected || !selected_id) return null;

  const handleChange = (val: string): void => {
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
        value={selected_id}
        enableClear={false}
        onValueChange={handleChange}
        icon={() => (
          <div className="w-5 h-5 flex items-center">
            <img
              src={`/projects/${selected.framework}.png`}
              className="w-full"
            />
          </div>
        )}
      >
        {projects.map((project) => (
          <SelectItem
            key={project.id}
            value={project.id}
            icon={() => (
              <div className="w-5 h-5 mr-2 flex items-center">
                <img
                  src={`/projects/${project.framework}.png`}
                  className="w-full"
                />
              </div>
            )}
          >
            {project.name}
          </SelectItem>
        ))}
      </Select>
    </>
  );
}
