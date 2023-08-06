"use client";

import React, { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("eca343e8-4d9f-4159-9ce2-d44bd990e26a");
  }, []);

  return null;
};

export default CrispChat;
