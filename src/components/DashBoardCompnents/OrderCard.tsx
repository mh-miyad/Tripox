"use client";
import { cn } from "@/lib/utils";
import CountUp from "react-countup";
import { MdOutlineInventory } from "react-icons/md";
import { Card } from "../ui/card";

const OrderCard = ({ active }: { active: boolean }) => {
  return (
    <div>
      <Card
        className={cn(
          "w-full max-w-lg group",
          "h-[240px] ",
          active
            ? "bg-[#5570F1]  dark:bg-[#5570F1]/30"
            : "bg-white dark:bg-slate-950"
        )}
      >
        <p
          className={`p-2.5 rounded-lg w-fit
          bg-indigo-400/30 text-white dark:text-white/80 m-7
          `}
        >
          <MdOutlineInventory className="w-10 h-10 " />
        </p>
        <div
          className={`mt-10 flex  items-center gap-3  mx-7 justify-between ${
            active ? "text-white" : "text-slate-800 dark:text-white"
          } `}
        >
          <p className="capitalize text-xl font-light ">
            total Product
            <br />
            <div className="flex items-center gap-2 mt-2 ">
              <span className="text-xl lg:text-2xl font-medium">
                <CountUp end={612567} />
              </span>
              <span className="text-base lg:text-lg font-light ">+10.85%</span>
            </div>
          </p>
          <p className="text-xl font-light ">
            Active
            <br />
            <div className="flex items-center gap-2 mt-2 ">
              <p className="text-xl lg:text-2xl font-medium">
                <CountUp end={3567} />
              </p>
              <br className="block sm:hidden" />
              <p className="text-base lg:text-lg font-light ">+10.85%</p>
            </div>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default OrderCard;
