import BankAccountConnect from "./components/BankAccountConnect";
import Sidebar from "./components/Sidebar";
import "./index.css";
import StatsCard from "./components/StatsCard";
import MoneyInsights from "./components/MoneyInsights";
import Report from "./components/Report";
function App() {
  return (
    <div className="flex gap-20 bg-[#F0F7F6] h-fit">
      <Sidebar />
      <div className="flex flex-col gap-3 pt-5 ml-80">
        <div className="flex h-fit items-center">
          <h1 className="text-3xl h-fit flex flex-col flex-grow">Dashboard</h1>
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
        <Report />
      </div>
    </div>
  );
}

export default App;
