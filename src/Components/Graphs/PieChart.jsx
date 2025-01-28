import React from 'react'
import {Pie,} from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);
const PieChart = () => {
  const pieData = {
    labels: ["STRONG FINANCE($1M+)", "MEDIUM ($500k-$1M)", "AVERAGE(Below $500k)","LOW (Below $200k)"],
    datasets: [
      {
        label: "Client Financial Strength",
        data: [1216, 4641, 747, 579,],
        backgroundColor: [
          "rgba(0, 102, 14, 0.6)",
          "rgba(0, 127, 211, 0.6)",
          "rgba(247, 191, 52, 0.6)",
          "rgba(214, 7, 0, 0.6)",
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