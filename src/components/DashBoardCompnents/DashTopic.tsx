"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn, getColorClasses } from "@/lib/utils";
import CountUp from "react-countup";
import { TfiPieChart } from "react-icons/tfi";
const DashTopic = ({
  topic,
  name,
  icon,
  color,
  amount,
  hope,
  dollar,
  rate,
  ratePoint,
  rateName,
}: {
  topic: string;
  dollar: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  amount: number;
  ratePoint: string;
  hope: number;
  rate: string;
  rateName: string;
}) => {
  return (
    <div>
      <Card className={cn("w-full max-w-lg  group", "h-[240px]")}>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-3 justify-between">
              <p
                className={`text-3xl  p-2 rounded-lg w-fit ${
                  color
                    ? `${getColorClasses(color)}`
                    : "bg-blue-300/30 dark:bg-blue-700/60 dark:text-blue-300  text-blue-800"
                }`}
              >
                {icon || <TfiPieChart />}
              </p>
              <Select>
                <SelectTrigger className="w-fit min-w-[120px] focus:ring-0 focus-within:ring-0 ">
                  <SelectValue placeholder="This Week" />
                </SelectTrigger>
                <SelectContent className="text-gray-400">
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <p
              className={`text-xl font-bold mt-3 ${
                color ? `text-${color}-400` : "text-blue-400"
              } `}
            >
              {" "}
              {topic}{" "}
            </p>
          </CardTitle>
          <CardDescription>
            <div className="flex items-center justify-between mt-5">
              <p>
                <span
                  className={`text-2xl md:text-3xl font-bold drop-shadow-md  ${
                    color ? `text-${color}-400` : "text-blue-500"
                  }`}
                >
                  {/* $ {amount} */}
                  {dollar} <CountUp end={amount} duration={3} />
                </span>
                <span className=" text-sm md:text-base font-medium drop-shadow-sm">
                  / {hope}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-3 justify-between">
              <p
                className={`text-sm font-medium ${
                  ratePoint === "neg" ? `text-red-500` : "text-green-400"
                }`}
              >
                {" "}
                {rateName} <br />
              </p>
              <p
                className={` font-medium mt-2 block drop-shadow-md ${
                  ratePoint === "neg" ? `text-red-500` : "text-green-400"
                }`}
              >
                {rate}
              </p>
            </div>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default DashTopic;
