import React from "react"; // Import the necessary library such as React for now.

import Chart from "chart.js/auto"; // Import the Chart.js library.

import { Pie } from "react-chartjs-2"

const labels = [
    "Live News",
    "Sports",
    "Bussiness",
    "Education",
    "World",    
  ];
  
  const data = {
    labels: labels,
    datasets: [
      {
        label: "News By Percentages",
        backgroundColor: [
          "#00A6B4",
          "#2E4057",
          "#FFD662",
          "#DD1C1A",
          "#FF8600",
          "#0E2F44",
        ],
        borderColor: "#fff",
        borderWidth: 1,
        hoverBackgroundColor: [
          "#003e4f",
          "#4c5b5c",
          "#946c2f",
          "#6b0f12",
          "#b25800",
          "#041f2b",
        ],
        hoverBorderColor: "#000",
        data: [30, 25, 20, 15, 5,],
      },
    ],
  };
  
 export const PieChart = () => {
    return (
      <div>
        <Pie data={data} />
      </div>
    );
  };
  
//   export default PieChart;
  