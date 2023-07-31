import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useUser } from "@clerk/nextjs";

const BotAvatar = () => {
  const { user } = useUser();

  return (
    <Avatar className='h-8 w-8'>
      <AvatarImage className='p-1' src='/logo.png' />
    </Avatar>
  );
};

export default BotAvatar;
