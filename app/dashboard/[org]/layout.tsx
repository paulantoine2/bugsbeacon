import {
  getOrganization,
  getProjects,
  getUserDetails,
} from "@/app/supabase-server";
import Logo from "@/components/logo";
import ProjectSelect from "@/components/project-select";
import { UserNav } from "@/components/user-nav";

import { Button, Text } from "@tremor/react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function UserLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { org: string };
}) {
  const [organization, projects, user] = await Promise.all([
    getOrganization(params.org),
    getProjects(params.org),
    getUserDetails(),
  ]);

  if (!user) return redirect("/signin");
  if (!organization) return redirect("/dashboard");

  return (
    <div className="min-h-screen">
      <nav className="flex items-center px-6 py-3 pb-2">
        <div className="flex items-center flex-1 text-tremor-brand dark:text-dark-tremor-brand">
          <Logo />
          <span className="ml-4">/</span>
          <Button variant="light" className="mx-4">
            <Link href={`/dashboard/${params.org}`}>{organization.name}</Link>
          </Button>
          {projects && <ProjectSelect projects={projects} />}
        </div>
        <div className="flex items-center gap-6">
          {/* <Link href="/roadmap">
            <Button variant="light">Roadmap</Button>
          </Link>
          <Link href="/docs">
            <Button variant="light">Docs</Button>
          </Link> */}
          <UserNav user={user} />
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
