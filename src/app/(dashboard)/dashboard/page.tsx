import DonutChart from "@/components/Chart/DonutChart";
import LineChart from "@/components/Chart/LineChart";
import PieChart from "@/components/Chart/PieChart";
import DashTopic from "@/components/DashBoardCompnents/DashTopic";
import OrderCard from "@/components/DashBoardCompnents/OrderCard";
import OrderTable from "@/components/DashBoardCompnents/OrderTable";
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
      rateName: "Increase Rate",
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
      rateName: "Increase Rate",
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
      topic: "Ads Expense ",
      rateName: "Increase Rate",
    },
  ];
  return (
    <div>
      <section>
        {/* Top section start here  */}
        <div className="">
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
                dollar="$"
                rateName={item.rateName}
                topic={item.topic}
                ratePoint={item.ratePoint}
              />
            ))}
            <div className=" xl:hidden">
              <OrderCard active={true} />
            </div>
          </div>
          <div className="sm:hidden mt-4">
            <DashTopic
              amount={3456}
              color={"sky"}
              icon={<RiLuggageCartLine />}
              hope={923746}
              rate={"20.85%"}
              key={1}
              dollar=""
              rateName="Abandoned Order"
              name="Orders"
              topic="Pending Order"
              ratePoint="neg"
            />
          </div>
        </div>
        {/* Top section end  here  */}
      </section>
      <section className="my-6  flex flex-col md:flex-row  items-start gap-5">
        <div className="flex-1">
          <PieChart />
          <DonutChart />
        </div>

        <div className=" hidden xl:block flex-1 space-y-5">
          <OrderCard active={true} />
          <OrderCard active={true} />
          <DashTopic
            amount={3456}
            color={"sky"}
            icon={<RiLuggageCartLine />}
            hope={923746}
            rate={"20.85%"}
            key={1}
            dollar=""
            rateName="Abandoned Order"
            name="Orders"
            topic="Pending Order"
            ratePoint="neg"
          />
        </div>
        <div className="flex-1">
          <OrderTable />
        </div>
      </section>
      <section className="flex flex-col md:flex-row  items-start gap-5">
        <div className="flex-1">
          <LineChart />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
