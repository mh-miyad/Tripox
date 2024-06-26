"use client";
import useStore from "@/Toolkit/Zustand/Store";
import { Poppins as Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChartPie } from "react-icons/fa";
import { FaHandHoldingDollar, FaPeopleRoof } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiShoppingBagLight } from "react-icons/pi";
const inter = Inter({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "300", "400", "500", "900", "700"],
});
const DashMenu = () => {
  const { setName, open } = useStore();
  console.log(open);
  const pathname = usePathname();
  const dashboardLink = [
    {
      base: "Dashboard",
      path: "/dashboard",
      icon: <FaChartPie className={`w-6 h-6`} />,
    },
    {
      base: "Sales",
      path: "/sales",
      icon: <FaHandHoldingDollar className={`w-6 h-6`} />,
    },
    {
      base: "Order",
      path: "/order",
      icon: <HiOutlineShoppingCart className={`w-6 h-6`} />,
    },
    {
      base: "Products",
      path: "/products",
      icon: <PiShoppingBagLight className={`w-6 h-6`} />,
    },
    {
      base: "Sales Report ",
      path: "/sales-report",
      icon: <MdOutlineSpaceDashboard className={`w-6 h-6`} />,
    },
    {
      base: "Customers",
      path: "/customer",
      icon: <FaPeopleRoof className={`w-6 h-6`} />,
    },
    {
      base: "Settings ",
      path: "/setting",
      icon: <IoSettingsOutline className={`w-6 h-6`} />,
    },
  ];
  return (
    <>
      <div className={`mt-8 ${inter.className}`}>
        <ul className="flex flex-col mx-4  gap-4 ">
          {dashboardLink.map((link) => (
            <li key={link.path} onClick={() => setName(link.base)}>
              <Link
                href={link.path}
                className={`text-base flex items-center justify-start gap-3   py-2 px-3 rounded-md hover:bg-indigo-400 hover:text-white transition-all ease-linear duration-150 ${
                  pathname === link?.path
                    ? `bg-indigo-500 text-white border-indigo-500 border-2`
                    : ""
                } `}
              >
                <span>{link.icon}</span>
                {link.base}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DashMenu;
