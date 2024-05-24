import { cardData } from "../data";
import Card from "./Card";

function StatsCard() {
  return (
    <section className="flex flex-col gap-4">
      {cardData.map((item, index) => (
        <Card
          amount={item.amount}
          icon={item.icon}
          iconBgColor={item.iconBgColor}
          title={item.title}
          trend={item.trend}
          trendIcon={item.trendIcon}
          key={index}
        />
      ))}
    </section>
  );
}

export default StatsCard;
