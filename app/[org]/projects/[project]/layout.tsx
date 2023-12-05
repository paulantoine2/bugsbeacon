import Submenu from "@/components/submenu";
import {
  BellIcon,
  DashboardIcon,
  RadiobuttonIcon,
} from "@radix-ui/react-icons";
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
      link: `/${params.org}/projects/${params.project}`,
      title: "Dashboard",
      icon: <DashboardIcon className="mr-2" />,
      strict: true,
    },
    {
      link: `/${params.org}/projects/${params.project}/issues`,
      title: "Issues",
      icon: <RadiobuttonIcon className="mr-2" />,
      counter: 345,
    },
    {
      link: `/${params.org}/projects/${params.project}/alerts`,
      title: "Alerts",
      icon: <BellIcon className="mr-2" />,
      counter: 2,
    },
  ];
  return (
    <div>
      <Submenu items={items} />
      {children}
    </div>
  );
}