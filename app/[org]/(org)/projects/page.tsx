import SANDBOX from "@/config/sandbox";
import Link from "next/link";

export default function Projects({ params }: { params: any }) {
  const org = params.org;
  return (
    <div>
      <ul>
        {Object.keys(SANDBOX.orgs[org]?.projects).map((project_slug, i) => (
          <Link key={i} href={`/${org}/projects/${project_slug}`}>
            {project_slug}
          </Link>
        ))}
      </ul>
    </div>
  );
}
