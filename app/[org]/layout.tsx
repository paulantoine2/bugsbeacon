import ProjectSelect from "@/components/project-select";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import SANDBOX from "@/config/sandbox";
import Link from "next/link";

export default function UserLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const org = SANDBOX.orgs[params.org];
  return (
    <div>
      <nav className="flex items-center px-4 py-3 pb-1">
        <div className="flex items-center flex-1">
          <span className="text-3xl">🚨</span>
          <Button asChild variant="ghost">
            <Link href={`/${params.org}`}>{org.name}</Link>
          </Button>
          <ProjectSelect org={params.org} />
        </div>
        <div className="flex items-center gap-6">
          <Button asChild variant="outline">
            <Link href="/">Feedback</Link>
          </Button>

          <Link href="/" className="text-sm text-muted-foreground font-medium">
            Roadmap
          </Link>

          <Link href="/" className="text-sm text-muted-foreground font-medium">
            Docs
          </Link>

          <Avatar className="h-7 w-7">
            <AvatarImage src="/profile.jpg" />
          </Avatar>
        </div>
      </nav>
      {children}
    </div>
  );
}
