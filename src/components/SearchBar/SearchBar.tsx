"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  const handleSearchClick = () => {
    if (search === "") {
      return;
    }
    alert("Search: " + search);
    setSearch("");
  };
  return (
    <>
      <Dialog>
        <div className="">
          <DialogTrigger asChild>
            <div className="sm:w-32 md:w-[190px] h-10 sm:border flex items-center px-2 cursor-pointer ">
              <HiMagnifyingGlass className="w-5 h-5 text-gray-900 dark:text-white" />
            </div>
          </DialogTrigger>
        </div>
        <div>
          <DialogContent className="w-full max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-70rem)]">
            <DialogHeader>
              <DialogTitle>Search </DialogTitle>
            </DialogHeader>
            <div>
              <label className="px-2 cursor-pointer" htmlFor="search">
                <span className="sr-only">Search</span>
              </label>
              <textarea
                name="search"
                id="search"
                value={search}
                className="searchInput dark:bg-transparent dark:border-white dark:focus:outline-white"
                onChange={(e) => setSearch(e.target.value)}
              ></textarea>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleSearchClick}>
                Search
              </Button>
            </DialogFooter>
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
};

export default SearchBar;
