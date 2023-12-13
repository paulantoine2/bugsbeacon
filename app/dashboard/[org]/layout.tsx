import ProjectSelect from "@/components/project-select";

import SANDBOX from "@/config/sandbox";
import { Button, Text } from "@tremor/react";
import Image from "next/image";
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
    <div className="min-h-screen">
      <nav className="flex items-center px-6 py-3 pb-2">
        <div className="flex items-center flex-1 text-tremor-brand dark:text-dark-tremor-brand">
          <img src="/logo.svg" width={30} className="mr-4" />
          <span>/</span>
          <Button variant="light" className="mx-4">
            <Link href={`/dashboard/${params.org}`}>{org.name}</Link>
          </Button>
          <ProjectSelect org={params.org} />
        </div>
        <div className="flex items-center gap-6">
          <Button variant="secondary" className="!border-zinc-800">
            <Link href="/">Feedback</Link>
          </Button>
          <Button variant="light">
            <Link href="/">Roadmap</Link>
          </Button>
          <Button variant="light">
            <Link href="/">Docs</Link>
          </Button>

          <Image
            src="/profile.jpg"
            alt="profile"
            width={28}
            height={28}
            className="rounded-full"
          />
          {/* <Avatar className="h-7 w-7">
            <AvatarImage src="/profile.jpg" />
          </Avatar> */}
        </div>
      </nav>
      {children}
      <footer className="border-t border-tremor-border dark:border-dark-tremor-border">
        <div className="container py-10">
          <Text>Bugs Beacon</Text>
        </div>
      </footer>
    </div>
  );
}
