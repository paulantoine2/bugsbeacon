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
} from "recharts";
import { Card } from "./ui/card";

function generateArray() {
  const array = [];
  for (let i = 1; i <= 30; i++) {
    const count = Math.floor(Math.random() * 51); // Génère un nombre aléatoire entre 0 et 50
    array.push({ index: i, count: count });
  }
  return array;
}

const data = generateArray();

export default function Chart() {
  return (
    <ResponsiveContainer width="100%" height={60}>
      <BarChart data={data}>
        <Bar dataKey="count" fill="secondary" />
      </BarChart>
    </ResponsiveContainer>
  );
}
