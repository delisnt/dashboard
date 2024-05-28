import RecentInvoicesTable from "./RecentInvoicesTable";

function RecentInvoices() {
  return (
    <div className="bg-white rounded-3xl p-5 h-fit w-[600px]">
      <div className="flex">
        <p className="text-xl font-bold mb-5">Recent Invoices</p>
        <button className="flex items-center ml-auto p-2 bg-btn-color rounded-2xl h-fit">
          ...
        </button>
      </div>
      <RecentInvoicesTable />
    </div>
  );
}

export default RecentInvoices;
