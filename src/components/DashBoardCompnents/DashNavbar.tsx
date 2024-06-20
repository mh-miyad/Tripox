import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { VscBell } from "react-icons/vsc";
import { DarkMood } from "../DarkMood/DarkMoodButton";
import SearchBar from "../SearchBar/SearchBar";
const DashNavbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between h-[70px] bg-white dark:bg-slate-950 px-5">
        <div>Dashboard </div>
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
                <DropdownMenuCheckboxItem>Status Bar</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Activity Bar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Panel</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DashNavbar;
