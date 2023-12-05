import Chart from "@/components/chart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { TypographyH4 } from "@/components/ui/typography";
import { FRAMES } from "@/config/sandbox";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Issue() {
  return (
    <div className="py-6 grid grid-flow-col grid-cols-3 gap-6">
      <div className="col-span-2">
        <div className="flex mb-4">
          <TypographyH4>Stacktrace</TypographyH4>
        </div>

        <Card>
          {FRAMES.map((frame, i) => (
            <Collapsible
              key={i}
              className={cn(i !== 0 && "border-t")}
              open={i === 0}
            >
              <div className="flex items-center py-2 px-4">
                <div className="flex-1 flex text-sm gap-1">
                  <span>{frame.call}</span>
                  <span className="text-muted-foreground">in</span>
                  <span>{frame.filename}</span>
                  <span className="text-muted-foreground">at</span>
                  <span>
                    line {frame.lineno}:{frame.colno}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {i === 0 && <Badge className="bg-orange-500">Cause</Badge>}
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" size="icon">
                      <ChevronDownIcon className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                </div>
              </div>
              <CollapsibleContent asChild>
                <div className="flex flex-col gap-1 font-mono text-sm py-1 border-t bg-muted text-muted-foreground">
                  {Object.keys(frame.code).map((lineno) => (
                    <div
                      key={lineno}
                      className={cn(
                        "px-4 flex gap-2",
                        frame.lineno === +lineno &&
                          "bg-primary text-primary-foreground font-medium"
                      )}
                    >
                      <span className="w-14">{lineno}</span>
                      <span className="whitespace-pre">
                        {frame.code[lineno]}
                      </span>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </Card>

        <div className="flex mt-8 mb-4">
          <TypographyH4>Notes</TypographyH4>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Last seen</CardTitle>
            <CardDescription>2 hours ago</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>First seen</CardTitle>
            <CardDescription>
              3 days ago in Release{" "}
              <Link
                href="/"
                className="text-foreground font-medium inline-flex items-center"
              >
                2.0 <ChevronRightIcon />
              </Link>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-0">
            <CardTitle>Last 24 hours</CardTitle>
            <CardDescription>56</CardDescription>
          </CardHeader>
          <CardContent>
            <Chart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-0">
            <CardTitle>Last 30 days</CardTitle>
            <CardDescription>769</CardDescription>
          </CardHeader>
          <CardContent>
            <Chart />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
