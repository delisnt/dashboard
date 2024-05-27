import { Bar } from "react-chartjs-2";
import { MoneyInsightsChartData, MoneyInsightsChartOptions } from "../data";
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

function MoneyInsightsChart() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Bar data={MoneyInsightsChartData} options={MoneyInsightsChartOptions} />
      <div className="mt-8 flex justify-center gap-5">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-[#054D3D]"></div>
          <span className="text-xs font-semibold">Inflow</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-bg-primary"></div>
          <span className="text-xs font-semibold">Outflow</span>
        </div>
      </div>
    </div>
  );
}

export default MoneyInsightsChart;
