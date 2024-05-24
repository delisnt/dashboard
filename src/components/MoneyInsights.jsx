import React from "react";
import BarChart from "./BarChart";

function MoneyInsights() {
  return (
    <div className="flex w-[600px] h-[450px] flex-col bg-white rounded-3xl p-5">
      <div className="flex justify-between">
        <h2 className="text-2xl font-extrabold">Money Insights</h2>
        <button className="bg-[#E6F1EF] py-3 px-5 rounded-2xl">View Report</button>
      </div>
      <p className="w-fit">Cash coming in and going out of your business</p>
      <BarChart />
    </div>
  );
}

export default MoneyInsights;
