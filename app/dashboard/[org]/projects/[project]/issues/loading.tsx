import { Card, Col, Flex, Grid, Metric, Text } from "@tremor/react";
import Actions from "./[issue]/actions";
import {
  CardSkeleton,
  MetricSkeleton,
  SubtitleSkeleton,
} from "@/components/skeleton";

export default function Loading() {
  return (
    <div className="container min-h-screen">
      <div className="py-10 flex flex-row items-start">
        <div className="flex-1 space-y-2">
          <MetricSkeleton width={240} />
          <SubtitleSkeleton width={400} />
        </div>
        <Actions />
      </div>
      <Grid numItemsLg={8} className="gap-6 pb-10">
        <Col numColSpanLg={2}>
          <CardSkeleton width={286} height={104} />
        </Col>
        <Col numColSpanLg={2}>
          <CardSkeleton width={286} height={104} />
        </Col>

        <Col numColSpanLg={2}>
          <CardSkeleton width={286} height={104} />
        </Col>
        <Col numColSpanLg={2}>
          <CardSkeleton width={286} height={104} />
        </Col>
      </Grid>
      {/* <Submenu items={items} /> */}
    </div>
  );
}
