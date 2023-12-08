import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

function findMaxValue(values) {
  return values.reduce((max, obj) => (obj.value > max ? obj.value : max), 0);
}

export default function TagCard({
  title,
  values,
}: {
  title: string;
  values: { label: string; value: number }[];
}) {
  const max = findMaxValue(values);

  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <div className="py-2">
        {values.map((val) => (
          <div
            key={val.label}
            className="flex flex-row items-center justify-between relative h-10 "
          >
            <div className="text-sm ml-6 z-10">{val.label}</div>
            <div className="text-sm font-bold mr-6 z-10">{val.value}</div>
            <div className=" w-full h-full absolute  px-3 py-1">
              <div
                className="bg-muted rounded h-full"
                style={{ width: `${(val.value / max) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
