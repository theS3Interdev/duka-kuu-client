"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";

import { Button } from "@/components/ui/button";
import { Color, Size } from "@/lib/utils/types";

import { Filter } from "./filter";

type MobileFiltersProps = {
  sizes: Size[];
  colors: Color[];
};

export const MobileFilters = ({ sizes, colors }: MobileFiltersProps) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="lg:hidden">
        Filters
        <Plus className="mr-2 h-4 w-4" />
      </Button>

      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        {/* background color and opacity start */}
        <div className="fixed inset-0 bg-accent bg-opacity-25" />
        {/* background color and opacity end */}

        {/* dialog position start */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-foreground py-4 pb-6 shadow-lg">
            {/* close button start */}
            <div className="flex items-center justify-end px-4">
              <Button variant="outline" size="icon" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            {/* close button end */}

            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
        {/* dialog position end */}
      </Dialog>
    </>
  );
};
