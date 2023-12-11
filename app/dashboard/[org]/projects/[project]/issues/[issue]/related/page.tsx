import { Callout, Text, TextInput } from "@tremor/react";
import IssuesTable from "../../issues-table";
import { subDays } from "date-fns";
import { InformationCircleIcon } from "@heroicons/react/solid";

export default function IssueRelated() {
  return (
    <div className="py-6 space-y-6">
      <Callout
        title="What are related issues ?"
        icon={InformationCircleIcon}
        color="cyan"
      >
        Related issues have the same Error thrown but a different Stack trace.
        In other words, their stack trace have only the first frame in common.
      </Callout>
      <TextInput placeholder="Search related issues..." />
      <IssuesTable
        data={[
          {
            exception_name: "TypeError",
            exception_message:
              "Cannot read properties of undefined (reading 'key')",
            events: 12,
            victims: 1,
            first_seen: subDays(new Date(), 4).toISOString(),
            last_seen: subDays(new Date(), 3).toISOString(),
            first_seen_version: "3.0.0",
            last_seen_version: "3.0.0",
            id: "1",
            is_crash: true,
            is_regression: true,
          },
        ]}
      />
    </div>
  );
}
