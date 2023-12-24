export type Project = {
  id: string;
  name: string;
  slug: string;
  events: { events: number; date: string }[];
  total_events: number;
};

import { wait } from "../utils";
import projects from "./projects.json";

export async function getProjects(): Promise<Project[]> {
  await wait();
  return projects.results;
}
