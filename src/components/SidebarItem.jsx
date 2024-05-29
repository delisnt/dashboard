import React from "react";
import { Icon } from "@iconify/react";

function SidebarItem({ icon, text }) {
  return (
    <button className="flex gap-2 items-center hover:text-lime-700 ">
      <Icon icon={icon} />
      {text}
    </button>
  );
}

export default SidebarItem


