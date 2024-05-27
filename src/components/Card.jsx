import { Icon } from "@iconify/react/dist/iconify.js";

function Container({ icon, iconBgColor, trend, trendIcon, title, amount }) {
  return (
    <div className="rounded-3xl bg-white border-black h-[100px] text-center gap-10 p-5 flex items-center">
      <div className={`p-4 rounded-full ${iconBgColor} flex h-fit`}>
        <Icon icon={icon} fontSize={25} />
      </div>
      <div>
        <p className="text-gray-500 text-xs">{title}</p>
        <h2 className="font-extrabold text-3xl">{amount}</h2>
      </div>
      <div className="flex gap-2 ml-auto">
        <span>{trend}</span>
        <Icon icon={trendIcon} />
      </div>
    </div>
  );
}

export default Container;
