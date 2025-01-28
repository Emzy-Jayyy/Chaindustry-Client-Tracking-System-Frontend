// import React from 'react'
// import {Bar,} from "react-chartjs-2";
// ChartJS.register(...registerables);
// import { Chart as ChartJS, registerables } from "chart.js";
// const BarChart = () => {
//   const barData = {
//     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//     datasets: [
//       {
//         label: "Prospect Chart",
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.6)",
//           "rgba(54, 162, 235, 0.6)",
//           "rgba(255, 206, 86, 0.6)",
//           "rgba(75, 192, 192, 0.6)",
//           "rgba(153, 102, 255, 0.6)",
//           "rgba(255, 159, 64, 0.6)",
//         ],
//         borderColor: [
//           "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };
//   return (
//     <div style={{flex:1}}>
//       <Bar data={barData} options={{ responsive: true }} />
//     </div>
//   )
// }

// export default BarChart

import React from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

// Register necessary Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const GroupedBarChart = () => {
  // Data for the chart
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ], // X-axis categories
    datasets: [
      {
        label: "cold prospect",
        data: [12, 15, 20, 25, 18, 22, 30, 10, 14, 24, 16, 20], // Data for subsection 1
        backgroundColor: "rgba(163, 212, 247, 0.8)", // Color for subsection 1
      },
      {
        label: "warm prospects",
        data: [10, 12, 18, 22, 16, 20, 25, 8, 12, 20, 14, 18], // Data for subsection 2
        backgroundColor: "rgba(255, 192, 77, 0.8)", // Color for subsection 2
      },
      {
        label: "contracts",
        data: [8, 10, 15, 18, 12, 16, 20, 6, 10, 18, 12, 14], // Data for subsection 3
        backgroundColor: "rgba(139, 195, 74, 0.8)", // Color for subsection 3
      },
    ],
  };

  // Chart configuration options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        stacked: false, // Disable stacking on the X-axis
      },
      y: {
        beginAtZero: true, // Start Y-axis at 0
      },
    },
  };

  return (
    <div style={{ width: "600px", margin: "0 auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default GroupedBarChart;
