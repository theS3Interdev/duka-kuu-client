import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils/utils";
import { Image } from "@/lib/utils/types";

type GalleryTabProps = {
  image: Image;
};

export const GalleryTab = ({ image }: GalleryTabProps) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-lg">
      {({ selected }) => (
        <div>
          <span className="absolute inset-0 aspect-square h-full w-full overflow-hidden rounded-lg">
            <NextImage
              src={image.url}
              alt="Product Image"
              fill
              sizes="100vw"
              priority
              quality={89}
              className="object-cover object-center"
            />
          </span>

          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-accent-foreground" : "ring-accent",
            )}
          />
        </div>
      )}
    </Tab>
  );
};
