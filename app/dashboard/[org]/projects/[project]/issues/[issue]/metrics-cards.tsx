import { MetricSkeleton } from "@/components/skeleton";
import { Issue } from "@/types/issue";
import { Card, Col, Flex, Metric, Text } from "@tremor/react";
import { formatDistance } from "date-fns";
import React from "react";

export default function MetricsCards({ issue }: { issue: Issue }) {
  return (
    <>
      <Col numColSpanLg={2}>
        <Card>
          <Flex alignItems="start">
            <Text>First seen</Text>
            <Text>
              {formatDistance(new Date(issue.first_seen_event), new Date(), {
                addSuffix: true,
              })}
            </Text>
          </Flex>
          <Metric>{issue.first_seen_version}</Metric>
        </Card>
      </Col>
      <Col numColSpanLg={2}>
        <Card>
          <Flex alignItems="start">
            <Text>Last seen</Text>
            <Text>
              {formatDistance(new Date(issue.last_seen_event), new Date(), {
                addSuffix: true,
              })}
            </Text>
          </Flex>

          <Metric>{issue.last_seen_version}</Metric>
        </Card>
      </Col>

      <Col numColSpanLg={2}>
        <Card>
          <Text>Affected users</Text>
          <Metric>{issue.affected_users}</Metric>
        </Card>
      </Col>
      <Col numColSpanLg={2}>
        <Card>
          <Text>Total events</Text>
          <Metric>{issue.total_events}</Metric>
        </Card>
      </Col>
    </>
  );
}
