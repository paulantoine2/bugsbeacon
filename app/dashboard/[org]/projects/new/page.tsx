import { Metric, Subtitle } from "@tremor/react";
import ProjectForm from "./project-form";

export default function NewProjectPage() {
  return (
    <div className="container py-10 min-h-screen">
      <Metric>Create a new project</Metric>
      <Subtitle>Create a project for each of your applications</Subtitle>
      <ProjectForm />
    </div>
  );
}
