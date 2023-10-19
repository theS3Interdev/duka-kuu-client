import qs from "query-string";

import { Product } from "@/lib/utils/types";

let endPoint: string;

/* change api endpoint depending on environment */
process.env.NODE_ENV === "production"
  ? (endPoint = `${process.env.NEXT_PUBLIC_API_URL_PRD}/products`)
  : (endPoint = `${process.env.NEXT_PUBLIC_API_URL_DEV}/products`);

type Query = {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
};

export const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: endPoint,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const response = await fetch(url);

  return response.json();
};
