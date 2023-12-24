import { getProjects } from "@/api/projects/routes";
import Logo from "@/components/logo";
import ProjectSelect from "@/components/project-select";

import { Button, Text } from "@tremor/react";
import Image from "next/image";
import Link from "next/link";

export default async function UserLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const projects = await getProjects();
  return (
    <div className="min-h-screen">
      <nav className="flex items-center px-6 py-3 pb-2">
        <div className="flex items-center flex-1 text-tremor-brand dark:text-dark-tremor-brand">
          <Logo />
          <span className="ml-4">/</span>
          <Button variant="light" className="mx-4">
            <Link href={`/dashboard/${params.org}`}>Acme Sandbox</Link>
          </Button>
          <ProjectSelect projects={projects} />
        </div>
        <div className="flex items-center gap-6">
          <Button variant="secondary" className="!border-zinc-800">
            Feedback
          </Button>
          <Link href="/roadmap">
            <Button variant="light">Roadmap</Button>
          </Link>
          <Link href="/docs">
            <Button variant="light">Docs</Button>
          </Link>

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
