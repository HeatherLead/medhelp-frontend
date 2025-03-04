import React from "react";
import { Chart as CHARTJS, Tooltip, Legend, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";

interface pieChartProps {
  labels: string[];
  data: number[];
  pieChartLabel: string;
}

CHARTJS.register(Tooltip, Legend, ArcElement);
const PieChart = ({ data, labels, pieChartLabel }: pieChartProps) => {
  const pieChartDataData = {
    labels,
    datasets: [
      {
        label: pieChartLabel,
        data,
        backgroundColor: [
          "rgba(46, 204, 113, 0.8)",
          "rgba(52, 152, 219, 0.8)",
          "rgba(231, 76, 60, 0.8)",
          "rgba(241, 196, 15, 0.8)",
          "rgba(155, 89, 182, 0.8)",
        ],
        hoverOffset: 4,
        cutout: "60%",
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          font: {
            size: 12,
          },
          boxWidth: 12,
          padding: 10,
        },
      },
    },
  };

  return <Pie options={options} data={pieChartDataData} />;
};

export default PieChart;
