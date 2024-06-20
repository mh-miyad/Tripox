import DashNavbar from "../DashBoardCompnents/DashNavbar";
import Menubar from "../DashBoardCompnents/Menubar";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body>
      <div className="flex h-screen items-start ">
        <aside>
          <Menubar />
        </aside>
        <div className="flex-1">
          <DashNavbar />
          <main>{children}</main>
        </div>
      </div>
    </body>
  );
};

export default DashBoardLayout;
