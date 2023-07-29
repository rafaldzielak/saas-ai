import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { FC, PropsWithChildren } from "react";

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='h-full relative'>
      <div className='hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900 w-72'>
        <Sidebar />
      </div>
      <main className='md: pl-72'>
        <Navbar />
        {children}
      </main>
      ;
    </div>
  );
};

export default DashboardLayout;
