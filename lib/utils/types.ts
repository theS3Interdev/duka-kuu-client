export type Hero = {
  id: string;
  label: string;
  imageUrl: string;
};

export type Category = {
  id: string;
  name: string;
  hero: Hero;
};

export type Size = {
  id: string;
  name: string;
  value: string;
};

export type Color = {
  id: string;
  name: string;
  value: string;
};

export type Image = {
  id: string;
  url: string;
};

export type Product = {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[];
};
