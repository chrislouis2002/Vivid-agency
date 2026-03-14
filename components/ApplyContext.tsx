"use client";

import { createContext, useContext, useState } from "react";
import ApplyPopup from "@/components/ApplyPopup";

const ApplyContext = createContext<any>(null);

export function ApplyProvider({ children }: any) {

  const [open, setOpen] = useState(false);

  function openApply() {
    setOpen(true);
  }

  return (
    <ApplyContext.Provider value={{ openApply }}>

      {children}

      <ApplyPopup open={open} setOpen={setOpen} />

    </ApplyContext.Provider>
  );
}

export function useApply() {
  return useContext(ApplyContext);
}
