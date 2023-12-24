import { Issue } from "@/types/issue";

import issues from "./issues.json";

export async function getIssues({
  project_id,
}: {
  project_id: string;
}): Promise<Issue[]> {
  return issues.results.filter((issue) => issue.app_key === project_id);
}

export async function getIssue({
  project_id,
  issue_id,
}: {
  project_id: string;
  issue_id: string;
}): Promise<Issue | null> {
  return (
    issues.results.find(
      (issue) => issue.id === issue_id && project_id === issue.app_key
    ) || null
  );
}
