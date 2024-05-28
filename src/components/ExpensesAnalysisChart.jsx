import { Doughnut } from "react-chartjs-2";
import { expensesAnalysisData, expensesAnalysisOptions } from "../data";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Icon } from "@iconify/react/dist/iconify.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpensesAnalysisChart() {
  return (
    <div className="flex flex-col justify-center px-5 pt-14 bg-white w-[620px] h-[500px] rounded-2xl">
      <div className="flex justify-between">
        <h2 className="text-xl w-fit">Expenses Analysis</h2>
        <button className="bg-btn-color rounded-2xl p-3 flex gap-2">
          Monthly
          <span>
            <Icon icon="mingcute:down-line" />
          </span>
        </button>
      </div>
      <Doughnut data={expensesAnalysisData} options={expensesAnalysisOptions} />
    </div>
  );
}

export default ExpensesAnalysisChart;
