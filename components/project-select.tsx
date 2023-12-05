"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import React from "react";
import { Select } from "./ui/select";
import { Button } from "./ui/button";
import SANDBOX from "@/config/sandbox";
import { CircleBackslashIcon, CircleIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

export default function ProjectSelect({ org }: { org: string }) {
  const segment = useSelectedLayoutSegments();

  const project_slug = segment[0] === "projects" && segment[1];

  if (!project_slug) return null;

  const project = SANDBOX.orgs[org]?.projects[project_slug];

  return (
    <>
      <span className="text-muted-foreground">/</span>
      <Button asChild variant="ghost">
        <Link href={`/${org}/projects/${project_slug}`}>
          <Avatar className="h-5 w-5 mr-2">
            <AvatarImage src="/react.svg" />
            <AvatarFallback>P</AvatarFallback>
          </Avatar>
          {project.name}
        </Link>
      </Button>
    </>
  );
}
