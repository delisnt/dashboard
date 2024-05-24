import React from "react";
import { Icon } from "@iconify/react";

function SidebarItem({ icon, text }) {
  return (
    <button className="flex gap-2 items-center hover:text-lime-700">
      <Icon icon={icon} />
      {text}
    </button>
  );
}

export default SidebarItem

{/* <li className="flex gap-2 items-center justify-start">
<Icon icon="ic:round-space-dashboard" />
Dashboard
</li>
<li className="flex gap-2 items-center justify-center">
<Icon icon="solar:card-outline" />
Sales & Payment
</li>
<li className="flex gap-2 items-center justify-start">
<Icon icon="tabler:file-invoice" />
Invoices
</li>
<li className="flex gap-2 items-center justify-start">
<Icon icon="map:accounting" />
Accounting
</li>
<li className="flex gap-2 items-center justify-start">
<Icon icon="iconamoon:invoice" />
Purchases
</li>
<li className="flex gap-2 items-center justify-start">
<Icon icon="mdi:report-box-outline" />
Reports
</li>
<li className="flex gap-2 items-center justify-start">
<Icon icon="material-symbols:integration-instructions-outline" />
Integrations
</li> */}
