import React, { Fragment } from "react";
import { Bar } from "react-chartjs-2";
import { AdminNavbar } from "../adminNav";
import { Footer, LineChart, PieChart } from "../../../components";

export const Performance = () => {
  // Sample data for demonstration
  const data = {
    labels: [
      "Live News",
      "Sports",
      "Bussiness",
      "Education",
      "World",
    ],
    datasets: [
      {
        label: "Views",
        backgroundColor: "rgba(109,40,217,0.8)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        data: [150, 200, 180, 220, 190],
      },
      {
        label: "Likes",
        backgroundColor: "rgba(220,38,38,0.7)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        data: [80, 120, 100, 140, 110],
      },
    ],
  };

  return (
    <Fragment>
      <AdminNavbar />
      <div className="grid gap-4 xl:grid-cols-1 2xl:grid-cols-2 pt-20 p-2">
        <div className="rounded-lg shadow  dark:bg-gray-900 ">
          <Bar data={data} />
          <div className="border-t-2 mt-2 p-2">
            <LineChart />
          </div>
        </div>
        <div className="rounded-lg shadow dark:bg-gray-900">
          <PieChart />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

