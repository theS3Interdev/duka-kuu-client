import { Color } from "@/lib/utils/types";

let endPoint: string;

/* change api endpoint depending on environment */
process.env.NODE_ENV === "production"
  ? (endPoint = `${process.env.NEXT_PUBLIC_API_URL_PRD}/colors`)
  : (endPoint = `${process.env.NEXT_PUBLIC_API_URL_DEV}/colors`);

export const getColors = async (): Promise<Color[]> => {
  const response = await fetch(`${endPoint}`, {
    next: { revalidate: 8 },
  });

  return response.json();
};
