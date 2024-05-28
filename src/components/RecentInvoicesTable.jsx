import { invoiceData } from "../data"

function RecentInvoicesTable() {
  return (
    <table className="min-w-full bg-white text-xs">
    <thead className="text-left text-gray-400">
      <tr>
        <th className="py-2 px-4">Status</th>
        <th className="py-2 px-4">No</th>
        <th className="py-2 px-4">Client</th>
        <th className="py-2 px-4">Total</th>
        <th className="py-2 px-4">Date Created</th>
      </tr>
    </thead>
    <tbody>
      {invoiceData.map((invoice, index) => (
        <tr key={index}>
          <td className="py-2 px-4 border-b-4 border-dotted ">
            <span
              className={`flex text-white justify-center py-1 px-2 rounded-xl text-center ${
                invoice.status === "Overdue"
                  ? "bg-[#EF8484]"
                  : invoice.status === "Paid"
                  ? "bg-[#029C86]"
                  : "bg-[#6FD35F]"
              }`}
            >
              {invoice.status}
            </span>
          </td>
          <td className="py-2 px-4 border-b-4 border-dotted">
            {invoice.no}
          </td>
          <td className="py-2 px-4 border-b-4 border-dotted font-bold">
            {invoice.client}
          </td>
          <td className="py-2 px-4 border-b-4 border-dotted font-bold">
            ${invoice.total.toLocaleString()}
          </td>
          <td className="py-2 px-4 border-b-4 border-dotted">
            {invoice.dateCreated}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default RecentInvoicesTable