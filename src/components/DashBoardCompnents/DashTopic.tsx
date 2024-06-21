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
import { cn } from "@/lib/utils";
import { TfiPieChart } from "react-icons/tfi";

const DashTopic = ({
  topic,
  name,
  icon,
  color,
  amount,
  hope,
  rate,
  ratePoint,
}: {
  topic: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  amount: string;
  ratePoint: string;
  hope: string;
  rate: string;
}) => {
  return (
    <div>
      <Card className={cn("w-full max-w-lg mx-auto group", "h-[200px]")}>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-3 justify-between">
              <p
                className={`text-3xl  p-2 rounded-lg w-fit ${
                  color
                    ? `bg-${color}-300/30 dark:bg-${color}-700/60 dark:text-${color}-300 text-${color}-800`
                    : "bg-blue-300/30 dark:bg-blue-700/60 dark:text-blue-300  text-blue-800"
                }`}
              >
                {icon || <TfiPieChart />}
              </p>
              <Select>
                <SelectTrigger className="w-fit min-w-[120px] focus:ring-0 focus-within:ring-0 ">
                  <SelectValue placeholder="This Week" />
                </SelectTrigger>
                <SelectContent color="indigo">
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <span className="text-base font-light tracking-wide">{name}</span>
          </CardTitle>
          <CardDescription>
            <div className="flex items-center justify-between">
              <p
                className={`text-xl font-bold ${
                  color ? `text-${color}-400` : "text-blue-400"
                } `}
              >
                {" "}
                {topic}{" "}
              </p>
              <p>
                <span
                  className={`text-3xl font-bold ${
                    color ? `text-${color}-400` : "text-blue-500"
                  }`}
                >
                  $ {amount}
                </span>
                <span>/ {hope}</span>
              </p>
            </div>
            <div className="flex items-center gap-3 justify-between">
              <p className="text-sm font-medium">
                {" "}
                Increase Rate <br />
              </p>
              <p
                className={` font-medium mt-2 block ${
                  ratePoint === "neg" ? `text-red-400` : "text-green-400"
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
