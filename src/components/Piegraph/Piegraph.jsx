import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import "./Piegraph.scss";
ChartJS.register(ArcElement, Tooltip, Legend);

function Piegraph() {
  const products = [
    {
      name: "Basic Tees",
      percent: 55,
      bgColor: "#98D89E",
    },
    {
      name: "Custom Short Pants",
      percent: 31,
      bgColor: "#F6DC7D",
    },
    {
      name: "Super Hoodies",
      percent: 14,
      bgColor: "#EE8484",
    },
  ];

  const data = {
    labels: products.map((product) => product.name),
    datasets: [
      {
        label: "My First Dataset",
        data: products.map((product) => product.percent),
        backgroundColor: products.map((product) => product.bgColor),
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          font: {
            size: 16,
            weight: 700,
          },
          color: "#333",
          padding: 25,

          usePointStyle: true,
          pointStyle: "circle",
        },
        display: true,
        position: "right",
      },
    },
  };

  return (
    <div className="pie-container">
      <div className="contoller">
        <h3>Top Products</h3>
        <select>
          <option value="">May -June 2021</option>
          <option value="">June -July 2021</option>
          <option value="">July -Aug 2021</option>
        </select>
      </div>
      <div className="pieChart">
        <Pie options={options} data={data} />
      </div>
    </div>
  );
}

export default Piegraph;
