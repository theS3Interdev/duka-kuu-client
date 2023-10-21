"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Expand, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Currency } from "@/components/misc/currency";

import { Product } from "@/lib/utils/types";

type ProductCardProps = {
  data: Product;
};

export const ProductCard = ({ data }: ProductCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  return (
    <Card
      onClick={handleClick}
      className="group cursor-pointer space-y-4 rounded-lg border p-3"
    >
      {/* image and actions section start */}
      <CardContent className="m-auto max-w-sm p-1">
        <div className="relative aspect-square rounded-lg">
          <Image
            src={data.images?.[0]?.url}
            alt="Product Image"
            fill
            sizes="100vw"
            priority
            quality={89}
            className="aspect-square rounded-lg object-cover"
          />
          <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
            <div className="flex justify-center gap-x-6">
              <Button variant="outline" size="icon" onClick={() => {}}>
                <Expand className="h-4 w-4" />
              </Button>

              <Button variant="outline" size="icon" onClick={() => {}}>
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
      {/* image and actions section end */}

      {/* description section start */}
      <CardFooter className="m-auto max-w-sm p-1">
        <div>
          <div>
            <p className="font-montserrat text-lg font-semibold">{data.name}</p>
            <p className="text-sm text-muted-foreground">
              {data.category?.name}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <Currency value={data?.price} />
          </div>
        </div>
      </CardFooter>
      {/* description section end */}
    </Card>
  );
};
