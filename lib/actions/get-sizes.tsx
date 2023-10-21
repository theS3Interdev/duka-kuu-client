import { Size } from "@/lib/utils/types";

let endPoint: string;

/* change api endpoint depending on environment */
process.env.NODE_ENV === "production"
  ? (endPoint = `${process.env.NEXT_PUBLIC_API_URL_PRD}/sizes`)
  : (endPoint = `${process.env.NEXT_PUBLIC_API_URL_DEV}/sizes`);

export const getSizes = async (): Promise<Size[]> => {
  const response = await fetch(`${endPoint}`, {
    next: { revalidate: 8 },
  });

  return response.json();
};
