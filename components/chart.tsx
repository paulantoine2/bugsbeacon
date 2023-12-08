"use client";

import React from "react";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  ReferenceLine,
  AreaChart,
  Area,
} from "recharts";
import { Card } from "./ui/card";

function generateArray() {
  const array = [];
  let max = 0;
  for (let i = 1; i <= 30; i++) {
    const count = Math.floor(Math.random() * 51); // Génère un nombre aléatoire entre 0 et 50
    if (count > max) max = count;
    array.push({ index: i, count: count });
  }
  return { array, max };
}

export default function Chart({
  width,
  height,
  details,
}: {
  width: string | number;
  height: string | number;
  details?: boolean;
}) {
  const { array, max } = generateArray();
  return (
    <ResponsiveContainer width={width} height={height}>
      <AreaChart data={array}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.5} />
            <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
          </linearGradient>
        </defs>
        {details && (
          <CartesianGrid
            className="text-slate"
            vertical
            horizontal
            stroke="currentColor"
            opacity={0.1}
          />
        )}
        {details && (
          <ReferenceLine
            y={max}
            stroke="black"
            strokeDasharray="3 3"
            label={max}
          />
        )}
        {details && <Tooltip />}
        {details && <XAxis interval={2} />}
        <Area
          // animationDuration={0}
          dataKey="count"
          strokeWidth={2}
          stroke="#06b6d4"
          type="monotone"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
