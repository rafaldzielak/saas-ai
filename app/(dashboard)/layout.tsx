import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/apiLimit";
import React, { FC, PropsWithChildren } from "react";

const DashboardLayout: FC<PropsWithChildren> = async ({ children }) => {
  const apiLimitCount = await getApiLimitCount();

  return (
    <div className='h-full relative'>
      <div className='hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900 w-72'>
        <Sidebar apiLimitCount={apiLimitCount} />
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
