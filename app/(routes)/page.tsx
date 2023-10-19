import { getHeroSection } from "@/lib/actions/get-hero-section";
import { getProducts } from "@/lib/actions/get-products";

import { Container } from "@/components/misc/container";
import { HeroSection, ProductList } from "@/components/index";

const HomePage = async () => {
  let sectionId!: string;

  /* change api endpoint depending on environment */
  process.env.NODE_ENV === "production"
    ? (sectionId = process.env.NEXT_PUBLIC_HERO_IMAGE_ID_PRD!)
    : (sectionId = process.env.NEXT_PUBLIC_HERO_IMAGE_ID_DEV!);

  const hero = await getHeroSection(sectionId!);

  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <HeroSection data={hero} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
