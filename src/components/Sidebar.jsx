import { Icon } from "@iconify/react/dist/iconify.js";
import { sidebarData } from "../data";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <div className="bg-dark-green fixed text-white h-screen flex flex-col justify-start content-center p-5 w-70">
      <div className="w-full flex justify-between items-center mb-5">
        <h2 className="text-lg font-bold">Erudia</h2>
        <button>
          <Icon icon="hugeicons:sidebar-left" />
        </button>
      </div>
      <button className="p-5 gap-5 bg-sidebar-btn rounded-xl flex items-center">
        <Icon icon="gridicons:house" />
        CoinCraft Company
      </button>
      <ul className="list-none w-max gap-5 flex flex-col mt-5 text-sidebar-list">
        {sidebarData.map((item, index) => (
          <SidebarItem icon={item.icon} text={item.text} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
