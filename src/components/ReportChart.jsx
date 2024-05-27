import { Bar } from "react-chartjs-2";
import {reportChartData, reportChartOptions} from '../data'
import ChartDataLabels from 'chartjs-plugin-datalabels';

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

function ReportChart() {

  return (
    <div className="w-full max-w-lg mx-auto px-4">
      <div className="flex bg-white justify-items-end h-[200px]">
        <Bar data={reportChartData} options={reportChartOptions} plugins={[ChartDataLabels]} />
      </div>
    </div>
  );
}

export default ReportChart;
