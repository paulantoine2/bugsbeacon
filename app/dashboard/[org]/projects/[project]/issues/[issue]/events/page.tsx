import { TextInput } from "@tremor/react";
import EventsTable from "./events-table";

export default function IssueEvents() {
  return (
    <div className="py-6 space-y-6">
      <TextInput placeholder="Search events..." />
      <EventsTable />
    </div>
  );
}
