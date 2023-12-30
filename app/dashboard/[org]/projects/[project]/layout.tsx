import Submenu from "@/components/submenu";

import Link from "next/link";

export default function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const items = [
    {
      link: `/dashboard/${params.org}/projects/${params.project}`,
      title: "Overview",
      strict: true,
    },
    {
      link: `/dashboard/${params.org}/projects/${params.project}/issues`,
      title: "Issues",
    },
    {
      link: `/dashboard/${params.org}/projects/${params.project}/alerts`,
      title: "Alerts",
    },
    {
      link: `/dashboard/${params.org}/projects/${params.project}/settings`,
      title: "Settings",
    },
  ];
  return (
    <div>
      <Submenu items={items} className="px-4" />
      <div>{children}</div>
    </div>
  );
}
