import Chart from "@/components/chart";
import TagCard from "@/components/tag-card";
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TypographyH4 } from "@/components/ui/typography";
import { FRAMES } from "@/config/sandbox";
import { cn } from "@/lib/utils";
import {
  BookmarkFilledIcon,
  CalendarIcon,
  CaretSortIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CommitIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const browsers = [
  {
    label: "Chrome",
    value: 45,
  },
  {
    label: "Edge",
    value: 32,
  },
  {
    label: "Firefox",
    value: 2,
  },
];

const browserVersions = [
  {
    label: "Chrome 34.3",
    value: 90,
  },
  {
    label: "Chrome 56",
    value: 88,
  },
  {
    label: "Chrome 58",
    value: 50,
  },
];

export default function Issue() {
  return (
    <div className="py-6 flex flex-col gap-12">
      <div>
        <div className="grid grid-flow-col grid-cols-4 gap-6 mb-6">
          <Card className="col-span-3">
            <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="tracking-tight text-sm font-medium">Events</h3>
              <Button variant="outline">
                <CalendarIcon className="mr-2" />
                Last 30 days
                <CaretSortIcon className="ml-2" />
              </Button>
            </div>
            <CardContent>
              <div className="text-2xl font-bold">769</div>
              <Chart width="100%" height={280} details />
            </CardContent>
          </Card>
          <div className="flex flex-col gap-4">
            <Card>
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">
                  Last seen
                </h3>
              </div>
              <CardContent>
                <div className="text-xl font-mono font-bold flex flex-row items-center gap-2">
                  <CommitIcon className="w-6 h-6" />
                  3.3.0
                </div>
                <p className="text-sm text-muted-foreground">3 days ago</p>
              </CardContent>
            </Card>
            <Card>
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">
                  First seen
                </h3>
              </div>
              <CardContent>
                <div className="text-xl font-mono font-bold flex flex-row items-center gap-2">
                  <CommitIcon className="w-6 h-6" />
                  3.4.2
                </div>
                <p className="text-sm  text-muted-foreground">2 hours ago</p>
              </CardContent>
            </Card>
            <Card>
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">
                  Affected users
                </h3>
              </div>
              <CardContent>
                <div className="text-xl font-bold">57</div>
                <p className="text-sm  text-muted-foreground">10 today</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="grid grid-flow-col grid-cols-2 gap-6">
          <TagCard title="Browser" values={browsers} />
          <TagCard title="Browser version" values={browserVersions} />
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-6">
          <div className="flex gap-2 items-center">
            <TypographyH4>Stack traces</TypographyH4>
          </div>

          <div className="flex gap-2 items-center ">
            <Tabs defaultValue="pretty">
              <TabsList>
                <TabsTrigger value="pretty">Pretty</TabsTrigger>
                <TabsTrigger value="raw">Raw</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        <div className="grid grid-flow-col grid-cols-4 gap-6 min-h-[500px]">
          <div>
            <Card>
              <div className="p-6">
                <div className="flex flex-row justify-between">
                  <div>3.4.2</div>
                  <div className="font-medium">42</div>
                </div>
              </div>
            </Card>
          </div>

          <div className="col-span-3">
            <Card>
              {FRAMES.map((frame, i) => (
                <Collapsible key={i} className={cn(i !== 0 && "border-t")}>
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
                      {i === 0 && (
                        <Badge variant="outline">
                          <BookmarkFilledIcon className="text-orange-500 mr-2" />
                          Cause
                        </Badge>
                      )}
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
          </div>
        </div>
      </div>
    </div>
  );
}
