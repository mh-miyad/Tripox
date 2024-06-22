import { ThemeProvider } from "@/Theme/theme-provider";
import { Poppins as Inter } from "next/font/google";
import DashNavbar from "../DashBoardCompnents/DashNavbar";
import Menubar from "../DashBoardCompnents/Menubar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body
      className={`bg-gray-300/10 dark:bg-slate-950 ${inter.className} font-normal `}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="md:flex  items-start ">
          <div className="hidden lg:block  flex-gow-1 bg-white dark:bg-slate-900 min-h-fit">
            <Menubar />
          </div>
          <div className="flex-1">
            <DashNavbar />
            <main className="p-3 xl:p-6">{children}</main>
          </div>
        </div>
      </ThemeProvider>
    </body>
  );
};

export default DashBoardLayout;
