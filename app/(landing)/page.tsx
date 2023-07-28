import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      LandingPage
      <Link href='/sign-in'>
        <div>
          <Button>Login</Button>
        </div>
      </Link>
      <Link href='/sign-up'>
        <div>
          <Button>Register</Button>
        </div>
      </Link>
    </div>
  );
};

export default LandingPage;
