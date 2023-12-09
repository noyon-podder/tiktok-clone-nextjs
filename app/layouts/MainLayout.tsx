import { usePathname } from "next/navigation";
import React from "react";
import TopNav from "./include/TopNav";
import SideNavMain from "./include/SideNavMain";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  return (
    <>
      <TopNav />
      <div
        className={`flex justify-between mx-auto w-full lg:px-2.5 px-0 ${
          pathName == "/" ? "max-w-[1140px]" : ""
        }`}
      >
        <SideNavMain />
        {children}
      </div>
    </>
  );
};

export default MainLayout;
