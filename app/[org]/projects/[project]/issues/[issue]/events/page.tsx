import { Input } from "@/components/ui/input";
import { DataTable } from "../../data-table";
import { columns, events } from "./columns";

export default function IssueEvents() {
  return (
    <div className="py-6 space-y-6">
      <Input placeholder="Search events..." />
      <DataTable columns={columns} data={events} />
    </div>
  );
}
