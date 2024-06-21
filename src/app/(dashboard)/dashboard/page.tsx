import PieChart from "@/components/Chart/PieChart";
import DashTopic from "@/components/DashBoardCompnents/DashTopic";
import { IoBagHandleOutline } from "react-icons/io5";
import { RiAdvertisementLine, RiLuggageCartLine } from "react-icons/ri";
const Dashboard = () => {
  const data = [
    {
      id: 1,
      name: "Sales",
      icon: <IoBagHandleOutline />,
      color: "blue",
      amount: "238,000",
      hope: "32,0000",
      rate: "+7.45%",
      ratePoint: "pos",
      topic: "Total Sales",
    },
    {
      id: 2,
      name: "Orders",
      icon: <RiLuggageCartLine />,
      color: "green",
      amount: "9,000",
      hope: "15,000",
      rate: "+39.69%",
      ratePoint: "pos",
      topic: "Total Order",
    },
    {
      id: 2,
      name: "Marketing",
      icon: <RiAdvertisementLine />,
      color: "red",
      amount: "3,589",
      hope: "1,000",
      rate: "-12.82%",
      ratePoint: "neg",
      topic: "Total Order",
    },
  ];
  return (
    <div>
      <section>
        {/* Top section start here  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
        </div>
        {/* Top section end  here  */}
        <div className="flex flex-wrap items-center gap-5 ">
          <PieChart />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
