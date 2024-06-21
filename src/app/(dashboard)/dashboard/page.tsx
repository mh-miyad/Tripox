import PieChart from "@/components/Chart/PieChart";
import DashTopic from "@/components/DashBoardCompnents/DashTopic";
import OrderCard from "@/components/DashBoardCompnents/OrderCard";
import { IoBagHandleOutline } from "react-icons/io5";
import { RiAdvertisementLine, RiLuggageCartLine } from "react-icons/ri";
const Dashboard = () => {
  const data = [
    {
      id: 1,
      name: "Sales",
      icon: <IoBagHandleOutline />,
      color: "blue",
      amount: 238000,
      hope: 320000,
      rate: "+7.45%",
      ratePoint: "pos",
      topic: "Total Sales",
    },
    {
      id: 2,
      name: "Orders",
      icon: <RiLuggageCartLine />,
      color: "green",
      amount: 9000,
      hope: 15000,
      rate: "+39.69%",
      ratePoint: "pos",
      topic: "Total Order",
    },
    {
      id: 3,
      name: "Marketing",
      icon: <RiAdvertisementLine />,
      color: "red",
      amount: 3589,
      hope: 1000,
      rate: "-12.82%",
      ratePoint: "neg",
      topic: "Total Order",
    },
  ];
  return (
    <div>
      <section>
        {/* Top section start here  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {data.map((item) => (
            <DashTopic
              key={item.id}
              amount={item.amount}
              color={item.color}
              icon={item.icon}
              hope={item.hope}
              rate={item.rate}
              name={item.name}
              topic={item.topic}
              ratePoint={item.ratePoint}
            />
          ))}
          <div className=" xl:hidden">
            <OrderCard />
          </div>
        </div>
        {/* Top section end  here  */}
      </section>
      <section className="my-6  flex  items-start gap-5">
        <div className=" md:grid grid-cols-1 gap-5 md:grid-cols-2 ">
          <PieChart />

          <PieChart />
        </div>
        <div className="hidden xl:block flex-1">
          <OrderCard />
          <OrderCard />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
