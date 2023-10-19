"use client";

import { useEffect, useState } from "react";

import { formatter } from "@/lib/utils/formatter";

type CurrencyProps = {
  value?: string | number;
};

export const Currency = ({ value = 0 }: CurrencyProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};
