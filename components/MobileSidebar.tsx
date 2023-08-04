"use client";

import React, { FC } from "react";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";
import useIsMounted from "@/hooks/useIsMounted";

interface MobileSidebarProps {
  apiLimitCount: number;
}

const MobileSidebar: FC<MobileSidebarProps> = ({ apiLimitCount }) => {
  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant='ghost' size='icon' className='md:hidden'>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='p-0'>
        <Sidebar apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
