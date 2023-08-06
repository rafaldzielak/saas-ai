import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/apiLimit";
import { checkSubscription } from "@/lib/subscription";
import React, { FC, PropsWithChildren } from "react";

const DashboardLayout: FC<PropsWithChildren> = async ({ children }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className='h-full relative'>
      <div className='hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 bg-gray-900 w-72'>
        <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
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
