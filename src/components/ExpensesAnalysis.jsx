import { Doughnut } from "react-chartjs-2";
import { expensesAnalysisData, expensesAnalysisOptions } from "../data";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Icon } from "@iconify/react/dist/iconify.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpensesAnalysis() {
  return (
    <div className="flex flex-col justify-between p-5 bg-white w-full h-1/2 rounded-2xl">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold">Expenses Analysis</h2>
        <button className="bg-btn-color rounded-2xl p-3 flex items-center gap-2">
          Monthly
          <span>
            <Icon icon="mingcute:down-line" />
          </span>
        </button>
      </div>
      <div className="flex justify-center">
        <div className="h-[400px] w-1/2">
          <Doughnut
            data={expensesAnalysisData}
            options={expensesAnalysisOptions}
          />
        </div>
      </div>
    </div>
  );
}
export default ExpensesAnalysis;
