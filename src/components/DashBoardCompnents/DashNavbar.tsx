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
import Image from "next/image";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { VscBell } from "react-icons/vsc";
import logo from "../../Assets/img/logo.png";
import { DarkMood } from "../DarkMood/DarkMoodButton";
import SearchBar from "../SearchBar/SearchBar";
import DashMenu from "./DashMenu";
const DashNavbar = () => {
  return (
    <>
      <Sheet key={"left"}>
        <nav className="flex items-center justify-between h-[70px] bg-white dark:bg-slate-950 px-3">
          <div>
            <div className="lg:hidden flex  items-center  gap-x-4">
              <SheetTrigger>
                <button>
                  <span className="sr-only">Open Menu </span>
                  <HiMiniBars3CenterLeft className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <Image
                src={logo}
                alt="logo"
                lazyBoundary="true"
                width={150}
                height={120}
              />
            </div>
            <h2 className="text-2xl font-bold drop-shadow-sm hidden lg:block">
              Dashboard
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
                <Image
                  src={logo}
                  alt="logo"
                  lazyBoundary="true"
                  width={150}
                  height={120}
                />
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
