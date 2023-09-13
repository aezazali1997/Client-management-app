// components/PieChart.js
import { Pie } from "react-chartjs-2";

export default function PieChart(data: any, options: any) {
  return <Pie data={data} options={options} />;
}
