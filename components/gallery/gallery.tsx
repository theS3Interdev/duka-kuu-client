"use client";

import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import { Image } from "@/lib/utils/types";

import { GalleryTab } from "./gallery-tab";

type GalleryProps = {
  images: Image[];
};

export const Gallery = ({ images = [] }: GalleryProps) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="aspect-square w-full">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="relative aspect-square h-full w-full overflow-hidden sm:rounded-lg">
              <NextImage
                src={image.url}
                alt="Image"
                fill
                sizes="100vw"
                priority
                quality={89}
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
