import React from "react";

export function MetricSkeleton({ width }: { width: number }) {
  return (
    <div
      className={`h-7 my-1 animate-pulse rounded-tremor-default bg-dark-tremor-background-subtle`}
      style={{ width }}
    ></div>
  );
}

export function SubtitleSkeleton({ width }: { width: number }) {
  return (
    <div
      className={`h-5 my-1 animate-pulse rounded-tremor-default bg-dark-tremor-background-subtle`}
      style={{ width }}
    ></div>
  );
}

export function CardSkeleton({
  width,
  height,
}: {
  width: number | string;
  height: number | string;
}) {
  return (
    <div
      className={`animate-pulse rounded-tremor-default bg-dark-tremor-background-subtle`}
      style={{ width, height }}
    ></div>
  );
}
