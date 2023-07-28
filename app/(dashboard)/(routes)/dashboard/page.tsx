import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      Dashbord
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};

export default DashboardPage;
