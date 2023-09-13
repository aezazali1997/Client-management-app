"use client";
import { Line } from "react-chartjs-2";


export default function LineChart(data: any, options: any) {
  return <Line data={data} options={options} />;
}
