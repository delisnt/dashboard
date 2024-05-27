import { Icon } from "@iconify/react/dist/iconify.js";
import ReportChart from "./ReportChart";

function Report() {
  return (
    <div className="bg-white w-1/2 h-max rounded-3xl p-5 flex flex-col">
      <div>
        <span className="text-xl">Total Orders</span>
        <div className="flex gap-3 items-center justify-between">
          <div className="flex gap-3 items-center">
            <span className="text-3xl font-extrabold">3,021</span>
            <span className="px-3 py-1 bg-[#70D560] rounded-2xl flex gap-3 text-white font-light">
              +164 increase
              <Icon icon="ph:arrow-up-right" />
            </span>
          </div>
          <button className="ml-auto bg-[#F1F1F1] px-4 py-2 rounded-2xl flex gap-2">
            Weekly
            <Icon icon="mingcute:down-line" />
          </button>
        </div>
      </div>
      <ReportChart />
    </div>
  );
}

export default Report;
