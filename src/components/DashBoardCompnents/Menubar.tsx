import Image from "next/image";
import logo from "../../Assets/img/logo.png";
import DashMenu from "./DashMenu";
const Menubar = () => {
  return (
    <div className="lg:w-[16rem] h-screen bg-white dark:bg-slate-950 md:block">
      <div className="w-full">
        <Image
          src={logo}
          alt="logo"
          className="mx-auto mt-5"
          lazyBoundary="true"
          width={200}
          height={120}
        />
      </div>
      {/* Main link of the menubar */}
      <div>
        <DashMenu />
      </div>
      {/* Main link of the menubar */}
    </div>
  );
};

export default Menubar;
