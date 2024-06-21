"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useStore from "@/Toolkit/Zustand/Store";
import { Dancing_Script as Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { VscBell } from "react-icons/vsc";
import logo from "../../Assets/img/logo.svg";
import { DarkMood } from "../DarkMood/DarkMoodButton";
import SearchBar from "../SearchBar/SearchBar";
import DashMenu from "./DashMenu";
const inter = Inter({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "500", "700"],
});
const DashNavbar = () => {
  const { name } = useStore();
  return (
    <>
      <Sheet key={"left"}>
        <nav className="flex items-center justify-between h-[70px] bg-white dark:bg-slate-900 px-5">
          <div>
            <div className="lg:hidden flex  items-center  gap-x-4">
              <SheetTrigger>
                <button>
                  <span className="sr-only">Open Menu </span>
                  <HiMiniBars3CenterLeft className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <Link href={"/dashboard"} className="flex items-center gap-2">
                <Image
                  src={logo}
                  alt="logo"
                  lazyBoundary="true"
                  width={40}
                  height={30}
                />
                <h1
                  className={`text-2xl font-bold ${inter.className} uppercase`}
                >
                  Tripox
                </h1>
              </Link>
            </div>
            <h2 className="text-2xl font-bold drop-shadow-sm hidden lg:block">
              {name || "Dashboard"}
            </h2>
          </div>
          <div className="hidden sm:block">
            <SearchBar />
          </div>

          <div className="flex items-center gap-2 ">
            {" "}
            <div className="sm:hidden">
              <SearchBar />
            </div>
            <div>
              <DarkMood />
            </div>
            <button className=" rounded-sm  p-1 text-black  dark:text-white">
              <span className="sr-only">notification</span>
              <VscBell className="w-6 h-6" />
            </button>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem>
                    Status Bar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Activity Bar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Panel</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>
                <Link href={"/dashboard"} className="flex items-center gap-2">
                  <Image
                    src={logo}
                    alt="logo"
                    lazyBoundary="true"
                    width={60}
                    height={30}
                  />
                  <h1
                    className={`text-4xl font-bold ${inter.className} uppercase`}
                  >
                    Tripox
                  </h1>
                </Link>
              </SheetTitle>
              {/* <SheetDescription>
               
              </SheetDescription> */}
              <div className="mt-12 ">
                <DashMenu />
              </div>
            </SheetHeader>
          </SheetContent>
        </nav>
      </Sheet>
    </>
  );
};

export default DashNavbar;
