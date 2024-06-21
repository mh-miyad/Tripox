import { cn } from "@/lib/utils";
import { Card } from "../ui/card";

const OrderCard = () => {
  return (
    <div>
      <Card className={cn("w-full max-w-lg mx-auto group", "h-[200px]")}>
        <div>hello</div>
      </Card>
    </div>
  );
};

export default OrderCard;
