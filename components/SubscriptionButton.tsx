"use client";

import React, { FC, useState } from "react";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import axios from "axios";

interface SubscriptionButtonProps {
  isPro: boolean;
}

const SubscriptionButton: FC<SubscriptionButtonProps> = ({ isPro }) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/stripe");
      window.location.href = response.data.url;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button variant={isPro ? "default" : "premium"} onClick={onClick} disabled={isLoading}>
      {isPro ? "Manage Subscription" : "Upgrade"}
      {!isPro && <Zap className='w-4 h-4 ml-2 fill-white ' />}
    </Button>
  );
};

export default SubscriptionButton;
