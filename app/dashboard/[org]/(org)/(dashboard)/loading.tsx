import { CardSkeleton } from "@/components/skeleton";
import { Grid, Metric } from "@tremor/react";

export default async function Loading() {
  return (
    <div className="container min-h-screen py-10">
      <Metric>Projects</Metric>

      <Grid numItemsMd={3} className="mt-10 gap-6">
        <CardSkeleton height={322} width={"100%"} />
        <CardSkeleton height={322} width={"100%"} />
      </Grid>
    </div>
  );
}
