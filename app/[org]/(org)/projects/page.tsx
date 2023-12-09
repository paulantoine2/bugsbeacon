import Chart from "@/components/chart";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TypographyH2, TypographyH4 } from "@/components/ui/typography";
import SANDBOX from "@/config/sandbox";
import { CircleIcon, DashboardIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Projects({ params }: { params: any }) {
  const org = params.org;
  return (
    <div className="container py-10 space-y-10 min-h-screen">
      <TypographyH2>Projects</TypographyH2>
      <div className="grid grid-flow-col grid-cols-3 gap-6">
        {Object.keys(SANDBOX.orgs[org]?.projects).map((project_slug, i) => (
          <Card key={i}>
            <div className="p-4 flex flex-row items-center gap-2 ">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/react.svg" />
              </Avatar>
              <div className="flex-1">
                <CardTitle>
                  <Link href={`/${org}/projects/${project_slug}`}>
                    {project_slug}
                  </Link>
                </CardTitle>
                <CardDescription>Test</CardDescription>
              </div>
              <Button size="icon" variant="outline">
                <DashboardIcon />
              </Button>
              <Button size="icon" variant="outline">
                <CircleIcon />
              </Button>
            </div>
            <TypographyH4>678 Issues</TypographyH4>
            <Chart height={150} width="100%" />
            <CardContent className="pt-2">
              <div>Last version</div>
              <div>3.4.2</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
