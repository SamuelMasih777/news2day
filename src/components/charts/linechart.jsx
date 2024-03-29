import React from "react"; // Importing the React library

import Chart from "chart.js/auto"; // Importing the Chart.js library

import { Line } from "react-chartjs-2"; // Importing the Line component from the react-chartjs-2 library

// Setting up the labels for the x-axis of the chart
const labels = ["January", "February", "March", "April", "May", "June"];

// Setting up the data for the chart, including the labels and datasets
const data = {
  labels: labels,
  datasets: [
    {
      label: "Live News", // Setting up the label for the dataset
      backgroundColor: "rgb(71,85,105)", // Setting up the background color for the dataset
      borderColor: "rgb(59,130,246)", // Setting up the border color for the dataset
      data: [0, 20, 10, 12, 24, 35, 48], // Setting up the data for the dataset
    },
    {
        label: "Sports", // Setting up the label for the dataset
        backgroundColor: "rgb(71,85,105)", // Setting up the background color for the dataset
        borderColor: "rgb(56,189,248)", // Setting up the border color for the dataset
        data: [0, 15, 2, 19, 15, 3, 45], // Setting up the data for the dataset
      },
      {
        label: "Bussiness", // Setting up the label for the dataset
        backgroundColor: "rgb(71,85,105)", // Setting up the background color for the dataset
        borderColor: "rgb(168,85,247)", // Setting up the border color for the dataset
        data: [5, 30, 5, 29, 35, 32, 55], // Setting up the data for the dataset
      },
      {
        label: "Education", // Setting up the label for the dataset
        backgroundColor: "rgb(71,85,105)", // Setting up the background color for the dataset
        borderColor: "rgb(255, 29, 72)", // Setting up the border color for the dataset
        data: [10, 5, 12, 19, 25, 13, 25], // Setting up the data for the dataset
      },
      {
        label: "World", // Setting up the label for the dataset
        backgroundColor: "rgb(71,85,105)", // Setting up the background color for the dataset
        borderColor: "rgb(52,211,153)", // Setting up the border color for the dataset
        data: [15, 25, 22, 49, 31, 29, 45], // Setting up the data for the dataset
      },
      
  ],
};

// Defining the LineChart component
export const LineChart = () => {
  return (
    <div>
      <Line data={data} /> 
    </div>
  );
};

// export default LineChart; // Exporting the LineChart component as the default export of the module
