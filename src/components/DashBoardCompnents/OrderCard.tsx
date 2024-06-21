"use client";
import { cn } from "@/lib/utils";
import CountUp from "react-countup";
import { MdOutlineInventory } from "react-icons/md";
import { Card } from "../ui/card";

const OrderCard = () => {
  return (
    <div>
      <Card
        className={cn(
          "w-full max-w-2xl group",
          "h-[240px] bg-[#5570F1] backdrop-blur-2xl dark:bg-[#5570F1]/30"
        )}
      >
        <p
          className={`p-2.5 rounded-lg w-fit
          bg-indigo-400/30 text-white dark:text-white/80 m-7
          `}
        >
          <MdOutlineInventory className="w-10 h-10 " />
        </p>
        <div className="mt-10 flex  items-center  mx-7 justify-between">
          <p className="capitalize text-xl font-light text-white">
            total Product
            <br />
            <div className="flex items-center gap-5 mt-2 ">
              <span className="text-xl sm:text-2xl font-medium">
                <CountUp end={612567} />
              </span>
              <span className="text-base sm:text-lg font-light ">+10.85%</span>
            </div>
          </p>
          <p className="text-xl font-light text-white">
            Active
            <br />
            <div className="flex items-center gap-2 mt-2 ">
              <p className="text-xl sm:text-2xl font-medium">
                <CountUp end={3567} />
              </p>
              <br className="block sm:hidden" />
              <p className="text-base sm:text-lg font-light ">+10.85%</p>
            </div>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default OrderCard;
