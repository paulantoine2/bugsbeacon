import { Col, Grid } from "@tremor/react";
import BrowsersCard from "./browsers-card";
import EventsCard from "./events-card";
import StackTraces from "./stack-traces";

export default function Issue() {
  return (
    <div className="py-6 flex flex-col gap-12">
      <div>
        <Grid numItemsLg={8} className="gap-6 ">
          <Col numColSpanLg={5}>
            <EventsCard />
          </Col>
          <Col numColSpanLg={3}>
            <BrowsersCard />
          </Col>
        </Grid>
      </div>
      <StackTraces />
    </div>
  );
}
