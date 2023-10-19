import { Hero } from "@/lib/utils/types";

let endPoint: string;

/* change api endpoint depending on environment */
process.env.NODE_ENV === "production"
  ? (endPoint = `${process.env.NEXT_PUBLIC_API_URL_PRD}/heroes`)
  : (endPoint = `${process.env.NEXT_PUBLIC_API_URL_DEV}/heroes`);

export const getHeroSection = async (id: string): Promise<Hero> => {
  const response = await fetch(`${endPoint}/${id}`, {
    next: { revalidate: 8 },
  });

  return response.json();
};
