import { Metric, Subtitle } from "@tremor/react";

export default function Alerts() {
  return (
    <div className="container py-10 min-h-screen">
      <Metric>Alerts</Metric>
      <Subtitle>
        Setup alerts to get notified when new errors are discovered.
      </Subtitle>
    </div>
  );
}
