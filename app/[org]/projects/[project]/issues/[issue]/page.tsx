import { Button } from "@/components/ui/button";
import {
  Card,
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
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function Issue() {
  return (
    <div className="py-6 grid grid-flow-col grid-cols-3 gap-6">
      <div className="col-span-2">
        <div className="flex mb-4">
          <TypographyH4>Stacktrace</TypographyH4>
        </div>

        <Card>
          {FRAMES.map((frame, i) => (
            <Collapsible key={i} className="border-b">
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
                <CollapsibleTrigger asChild>
                  <Button variant="outline" size="icon">
                    <ChevronDownIcon className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                Yes. Free to use for personal and commercial projects. No
                attribution required.
              </CollapsibleContent>
            </Collapsible>
          ))}
        </Card>
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
            <CardDescription>3 days ago</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
