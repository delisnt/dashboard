import BankAccountConnect from "./components/BankAccountConnect";
import Sidebar from "./components/Sidebar";
import "./index.css";
import StatsCard from "./components/StatsCard";
import MoneyInsights from "./components/MoneyInsights";
import Report from "./components/Report";
import RecentInvoices from "./components/RecentInvoices";
import ExpensesAnalysis from "./components/ExpensesAnalysis";


function App() {
  return (
    <div className="flex flex-col gap-5 md:flex-row w-screen min-h-screen bg-[#F0F7F6]">
      <div className="w-full lg:w-1/5">
        <Sidebar className="w-full lg:w-1/5" />
      </div>
      <div className="flex flex-col gap-3 pt-5 flex-wrap">
        <div className="flex h-fit xl:justify-between items-center md:gap-0 gap-5  max-w-7xl">
          <h1 className="text-3xl h-fit flex flex-col md:flex-grow flex-grow-0">Dashboard</h1>
          <button className=" bg-dark-green text-white w-[15%] flex p-4 rounded-3xl">
            <span>Create</span>
            <span className="ml-auto text-xl">+</span>
          </button>
        </div>
        <div className="flex flex-wrap gap-5">
          <BankAccountConnect />
          <StatsCard />
          <MoneyInsights />
        </div>
        <div className="flex gap-5 flex-wrap">
          <div className="flex gap-5 flex-wrap flex-col w-fit">
            <Report />
            <ExpensesAnalysis />
          </div>
          <RecentInvoices />
        </div>
      </div>
    </div>
  );
}

export default App;
