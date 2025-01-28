import React from 'react'
import {Pie,} from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);
const PieChart = () => {
  const pieData = {
    labels: ["Strong", "Medium", "Low","Very Low"],
    datasets: [
      {
        label: "Client Financial Strength",
        data: [1216, 4641, 747, 579,],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div style={{flex:1}}>
      <Pie data={pieData} options={{ responsive: true }} />
    </div>
  )
}

export default PieChart