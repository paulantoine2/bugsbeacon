import Submenu from "@/components/submenu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import {
  BellIcon,
  CaretSortIcon,
  ChevronDownIcon,
  DashboardIcon,
  LayersIcon,
  Link1Icon,
  ListBulletIcon,
  PersonIcon,
  RadiobuttonIcon,
  RocketIcon,
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
      title: "Overview",
      link: `/${params.org}/projects/${params.project}/issues/${params.issue}`,
      icon: <LayersIcon className="mr-2" />,
      strict: true,
    },
    {
      title: "Events",
      link: `/${params.org}/projects/${params.project}/issues/${params.issue}/events`,
      icon: <ListBulletIcon className="mr-2" />,
      counter: 769,
    },
    {
      title: "Victims",
      link: `/${params.org}/projects/${params.project}/issues/${params.issue}/victims`,
      icon: <PersonIcon className="mr-2" />,
      counter: 34,
    },
    {
      title: "Related",
      link: `/${params.org}/projects/${params.project}/issues/${params.issue}/related`,
      icon: <Link1Icon className="mr-2" />,
      counter: 4,
    },
  ];

  return (
    <div className="container">
      <div className="py-4 flex flex-row">
        <div className="flex-1">
          <TypographyH2>TypeError</TypographyH2>
          <div className="text-muted-foreground text-sm">
            Cannot read value (func) of undefined
          </div>
          <div className="flex gap-2 mt-2">
            <Badge className="bg-red-500">Component crash</Badge>
            <Badge className="bg-purple-500">Regression</Badge>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RocketIcon className="mr-2" />
            Production
            <CaretSortIcon className="ml-2" />
          </Button>
          <Button variant="secondary">
            Ignore
            <ChevronDownIcon className="ml-2" />
          </Button>
          <Button>
            Resolve
            <ChevronDownIcon className="ml-2" />
          </Button>
        </div>
      </div>
      <Submenu items={items} />
      {children}
    </div>
  );
}
