import { Dancing_Script as Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import logo from "../../Assets/img/logo.svg";
import DashMenu from "./DashMenu";
const inter = Inter({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "500", "700"],
});
const Menubar = () => {
  return (
    <aside className="lg:w-[18rem] h-screen bg-white dark:bg-slate-950 md:block">
      <div className="w-full mt-3 flex justify-center">
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
    </aside>
  );
};

export default Menubar;
