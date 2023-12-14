import Submenu from "@/components/submenu";
import Link from "next/link";

export default function OrganizationLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const items = [
    {
      link: `/dashboard/${params.org}`,
      title: "Dashboard",
      strict: true,
    },
    {
      link: `/dashboard/${params.org}/usage`,
      title: "Usage",
    },
    {
      link: `/dashboard/${params.org}/plans`,
      title: "Plans",
    },
    {
      link: `/dashboard/${params.org}/settings`,
      title: "Settings",
    },
  ];
  return (
    <div>
      <Submenu items={items} className="px-4" />
      {children}
    </div>
  );
}
