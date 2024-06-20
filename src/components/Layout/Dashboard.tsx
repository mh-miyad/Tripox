import { ThemeProvider } from "@/Theme/theme-provider";
import DashNavbar from "../DashBoardCompnents/DashNavbar";
import Menubar from "../DashBoardCompnents/Menubar";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body className="bg-gray-300/10 dark:bg-slate-950">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="md:flex h-screen items-start ">
          <aside className="hidden lg:block">
            <Menubar />
          </aside>
          <div className="flex-1 pr-5">
            <DashNavbar />
            <main className=" p-3">{children}</main>
          </div>
        </div>
      </ThemeProvider>
    </body>
  );
};

export default DashBoardLayout;
