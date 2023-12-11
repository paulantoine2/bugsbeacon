"use client";

import { TagIcon, UserIcon } from "@heroicons/react/solid";
import { Card, Col, Flex, Icon, Metric, Text } from "@tremor/react";
import React from "react";

export default function MetricsCards() {
  return (
    <>
      <Col numColSpanLg={2}>
        <Card>
          <Flex alignItems="start">
            <Text>First seen</Text>
            <Text>3 Days ago</Text>
          </Flex>
          <Metric>3.0.0</Metric>
        </Card>
      </Col>
      <Col numColSpanLg={2}>
        <Card>
          <Flex alignItems="start">
            <Text>Last seen</Text>
            <Text>2 Hours ago</Text>
          </Flex>

          <Metric>3.3.0</Metric>
        </Card>
      </Col>

      <Col numColSpanLg={2}>
        <Card>
          <Text>Affected users</Text>
          <Metric>47</Metric>
        </Card>
      </Col>
      <Col numColSpanLg={2}>
        <Card>
          <Text>Total events</Text>
          <Metric>769</Metric>
        </Card>
      </Col>
    </>
  );
}
