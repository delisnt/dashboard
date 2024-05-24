import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const inflowData = [
    26020, 39130, 21500, 31120, 27620, 24920, 50000, 38500, 39500, 45000, 35000,
    20030,
  ];
  const outflowData = [
    12000, 15000, 10000, 5000, 4200, 5700, 17000, 17000, 19200, 12500, 16200,
    8800,
  ];

  const data = {
    labels: months,
    datasets: [
      {
        label: "Inflow",
        data: inflowData,
        backgroundColor: "#054D3D",
        borderColor: "#054D3D",
        borderWidth: 1,
        borderRadius: {
          topLeft: 24,
          topRight: 24,
          bottomLeft: 0,
          bottomRight: 0,
        },
      },
      {
        label: "Outflow",
        data: outflowData,
        backgroundColor: "#02A18A",
        borderColor: "#02A18A",
        borderWidth: 1,
        borderRadius: {
          topLeft: 24,
          topRight: 24,
          bottomLeft: 0,
          bottomRight: 0,
        },
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Monthly Inflow and Outflow",
      },
      tooltip: {
        backgroundColor: "#70D560", 
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#E9E9E9",
        },
      },
      y: {
        grid: {
          display: true,
          borderDash: [5, 5],
        },
        ticks: {
          stepSize: 10000,
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Bar data={data} options={options} />
      <div className="mt-8 flex justify-center gap-5">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-[#054D3D]"></div>
          <span className="text-xs font-semibold">Inflow</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-[#02A18A]"></div>
          <span className="text-xs font-semibold">Outflow</span>
        </div>
      </div>
    </div>
  );
}

export default BarChart;
