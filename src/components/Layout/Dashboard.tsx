import Menubar from "../DashBoardCompnents/Menubar";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body>
      <main className="flex ">
        <div>
          <Menubar />
        </div>
        <div className="flex-1">{children}</div>
      </main>
    </body>
  );
};

export default DashBoardLayout;
