import { CardSkeleton } from "@/components/skeleton";
import { Metric, Subtitle, Text } from "@tremor/react";

export default function Loading() {
  return (
    <div className="container py-10 min-h-screen">
      <Metric>Issues</Metric>
      <Subtitle>
        Exceptions are grouped by issues based on their name and stack trace.
      </Subtitle>
      <div className="space-y-6 mt-10 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center space-x-2">
            <CardSkeleton height={36} width="50%" />
            <CardSkeleton height={36} width="30%" />
            <CardSkeleton height={36} width="30%" />
          </div>
        </div>
      </div>
      <CardSkeleton height={200} width="100%" />
    </div>
  );
}
