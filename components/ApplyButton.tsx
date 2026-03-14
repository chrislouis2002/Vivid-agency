"use client";

import { useApply } from "@/components/ApplyContext";

export default function ApplyButton({ className, children }: any) {

  const { openApply } = useApply();

  return (
    <button
      onClick={openApply}
      className={className}
    >
      {children}
    </button>
  );
}
