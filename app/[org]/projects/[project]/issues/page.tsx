import SANDBOX from "@/config/sandbox";
import Link from "next/link";

export default function Issues({ params }: { params: any }) {
  return (
    <div>
      <ul>
        {SANDBOX.orgs[params.org]?.projects[params.project]?.issues.map(
          (issue, i) => (
            <Link key={i} href={`issues/${i}`}>
              {issue.name}
            </Link>
          )
        )}
      </ul>
    </div>
  );
}
