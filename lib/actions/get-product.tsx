import { Product } from "@/lib/utils/types";

let endPoint: string;

/* change api endpoint depending on environment */
process.env.NODE_ENV === "production"
  ? (endPoint = `${process.env.NEXT_PUBLIC_API_URL_PRD}/categories`)
  : (endPoint = `${process.env.NEXT_PUBLIC_API_URL_DEV}/categories`);

export const getProduct = async (id: string): Promise<Product[]> => {
  const response = await fetch(`${endPoint}/${id}`);

  return response.json();
};
