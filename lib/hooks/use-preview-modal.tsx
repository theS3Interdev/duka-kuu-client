import { create } from "zustand";

import { Product } from "@/lib/utils/types";

type PreviewModalStore = {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
};

export const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Product) => set({ isOpen: true, data: data }),
  onClose: () => set({ isOpen: false }),
}));
