// components/PieChartComponent.js

import { Pie } from "react-chartjs-2";

function PieChartComponent() {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [
      {
        data: [12, 19, 3, 5],
        backgroundColor: ["red", "blue", "yellow", "green"],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
}

export default PieChartComponent;
