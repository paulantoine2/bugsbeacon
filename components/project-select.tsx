"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import React from "react";

import SANDBOX from "@/config/sandbox";
import { CircleBackslashIcon, CircleIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Button, Select, SelectItem } from "@tremor/react";
import Image from "next/image";

export default function ProjectSelect({ org }: { org: string }) {
  const segment = useSelectedLayoutSegments();

  const project_slug = segment[0] === "projects" && segment[1];

  if (!project_slug) return null;

  const project = SANDBOX.orgs[org]?.projects[project_slug];

  return (
    <>
      <span>/</span>
      <Select
        className="max-w-xs ml-4"
        value={project_slug}
        enableClear={false}
        icon={(props) => (
          <svg
            width="100%"
            height="100%"
            viewBox="-10.5 -9.45 21 18.9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <circle cx="0" cy="0" r="2" fill="#82D7F7"></circle>
            <g stroke="#82D7F7" stroke-width="1" fill="none">
              <ellipse rx="10" ry="4.5"></ellipse>
              <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
              <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
            </g>
          </svg>
        )}
      >
        <SelectItem value={project_slug}>{project.name}</SelectItem>
      </Select>
    </>
  );
}
