import { Callout, Text, TextInput } from "@tremor/react";
import IssuesTable from "../../(list)/issues-table";
import { subDays } from "date-fns";
import { InformationCircleIcon } from "@heroicons/react/solid";

export default async function IssueRelated({
  params,
}: {
  params: { issue: string; project: string };
}) {
  return (
    <div className="py-6 space-y-6">
      <Callout
        title="What are related issues ?"
        icon={InformationCircleIcon}
        color="orange"
      >
        Related issues have the same Error thrown but a different Stack trace.
        In other words, their stack trace have only the first frame in common.
      </Callout>
      <TextInput placeholder="Search related issues..." />
      <IssuesTable data={[]} />
    </div>
  );
}
