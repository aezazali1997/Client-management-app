// components/BarGraph.js
"use client";

import { Bar } from "react-chartjs-2";

export default function BarGraph(data: any, options: any) {
  return <Bar data={data} options={options} />;
}
