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
      link: `/${params.org}`,
      title: "Dashboard",
      strict: true,
    },
    {
      link: `/${params.org}/usage`,
      title: "Usage",
    },
    {
      link: `/${params.org}/plans`,
      title: "Plans",
    },
    {
      link: `/${params.org}/settings`,
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
