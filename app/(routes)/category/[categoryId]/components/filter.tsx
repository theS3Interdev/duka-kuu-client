"use client";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

import { Color, Size } from "@/lib/utils/types";

import { cn } from "@/lib/utils/utils";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type FilterProps = {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
};

export const Filter = ({ data, name, valueKey }: FilterProps) => {
  const searchParams = useSearchParams();

  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true },
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="font-montserrat text-lg font-semibold">{name}</h3>

      <Separator orientation="horizontal" className="my-4" />

      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                selectedValue === filter.id &&
                  "bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground",
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
