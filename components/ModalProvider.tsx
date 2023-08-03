"use client";

import useIsMounted from "@/hooks/useIsMounted";
import ProModal from "./ProModal";

export const ModalProvider = () => {
  const isMounted = useIsMounted();
  if (!isMounted) return null;

  return (
    <>
      <ProModal />
    </>
  );
};
