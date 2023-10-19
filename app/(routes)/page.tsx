import { getHeroSection } from "@/lib/actions/get-hero-section";
import { getProducts } from "@/lib/actions/get-products";

import { Container } from "@/components/misc/container";
import { HeroSection, ProductList } from "@/components/index";

const HomePage = async () => {
  const hero = await getHeroSection("clnnao02g0002pew2ccfvjbsu");

  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <HeroSection data={hero} />
      </div>

      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
