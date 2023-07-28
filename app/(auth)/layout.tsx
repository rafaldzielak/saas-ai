import React, { FC, PropsWithChildren } from "react";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className='flex items-center justify-center h-full'>{children}</div>;
};

export default AuthLayout;
