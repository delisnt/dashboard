import BankAccountConnect from "./components/BankAccountConnect";
import Sidebar from "./components/Sidebar";
import "./index.css";
import StatsCard from "./components/StatsCard";
import MoneyInsights from "./components/MoneyInsights";
import Report from "./components/Report";
import RecentInvoices from "./components/RecentInvoices";
import ExpensesAnalysis from "./components/ExpensesAnalysis";
import Header from "./components/Header";


function App() {
  return (
    <div className="flex flex-col gap-5 md:flex-row w-screen min-h-screen bg-[#F0F7F6]">
      <div className="w-full lg:w-1/5">
        <Sidebar className="w-full lg:w-1/5" />
      </div>
      <div className="flex flex-col gap-3 pt-5 flex-wrap">
        <Header/>
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
