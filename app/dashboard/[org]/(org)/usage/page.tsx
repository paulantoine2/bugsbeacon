import { Metric } from "@tremor/react";
import ErrorsUsage from "./errors-usage";

export default function Usage() {
  return (
    <div className="container min-h-screen py-10">
      <Metric>Usage</Metric>
      <ErrorsUsage />
    </div>
  );
}
