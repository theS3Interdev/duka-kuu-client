"use client";

import { ShoppingCart } from "lucide-react";

import { Product } from "@/lib/utils/types";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Currency } from "@/components/misc/currency";

type InformationProps = {
  data: Product;
};

export const Information = ({ data }: InformationProps) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl">
          <Currency value={data?.price} />
        </p>
      </div>

      <Separator orientation="horizontal" className="my-4" />

      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold">Size:</h3>
          <div>{data?.size?.name}</div>
        </div>

        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-muted-foreground"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>

      <div className="mt-10 flex items-center gap-x-3">
        <Button>
          Add to Cart
          <ShoppingCart className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
