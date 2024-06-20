import { Dancing_Script as Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaGift } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { TbHeadset } from "react-icons/tb";
import logo from "../../Assets/img/logo.svg";
import DashMenu from "./DashMenu";
const inter = Inter({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "500", "700"],
});
const Menubar = () => {
  return (
    <aside className="lg:w-[18rem] h-screen bg-white dark:bg-slate-900 md:block">
      <div className="w-full pt-3 flex justify-center">
        <Link href={"/admin"} className="flex items-center gap-2  ">
          <Image
            src={logo}
            alt="logo"
            lazyBoundary="true"
            width={60}
            height={60}
          />
          <h1 className={`text-4xl font-bold ${inter.className} uppercase`}>
            Tripox
          </h1>
        </Link>
      </div>
      {/* Main link of the menubar */}
      <div className="mx-3 ">
        <DashMenu />
      </div>
      {/* Main link of the menubar */}
      <div className="absolute bottom-12">
        <Link
          href={"/contact"}
          className="mx-3 flex  border w-full px-7 py-3 rounded-lg bg-blue-900/50 text-white hover:bg-blue-700 items-center gap-3  "
        >
          <span>
            <TbHeadset className="w-6 h-6" />
          </span>
          <h2>Contact Support </h2>
        </Link>
        <div className="mt-4 mb-2 gap-y-2  bg-pink-500/20  dark:bg-pink-400/50 flex flex-col justify-center w-full mx-3 py-3 rounded-lg">
          <div className=" flex justify-center gap-x-3 items-center">
            <FaGift className="w-5 h-5 " />
            <h2 className="text-base">Free Gift For You </h2>
          </div>
          <p className="text-center">Update Your Account </p>
        </div>
        <button className="mx-3  flex   w-full px-10 py-3 rounded-lg text-rose-500 font-medium  items-center gap-3  ">
          <span>
            <IoIosLogOut className="w-6 h-6" />
          </span>
          <h2>Log Out </h2>
        </button>
      </div>
    </aside>
  );
};

export default Menubar;
