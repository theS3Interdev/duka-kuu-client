import { getProduct } from "@/lib/actions/get-product";
import { getProducts } from "@/lib/actions/get-products";

import { Separator } from "@/components/ui/separator";
import { Gallery } from "@/components/gallery/gallery";
import { Container } from "@/components/misc/container";
import { Information, ProductList } from "@/components/index";

type ProductPageProps = {
  params: {
    productId: string;
  };
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productId);

  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  if (!product) {
    return null;
  }

  return (
    <div>
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />

            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Information data={product} />
            </div>
          </div>

          <Separator orientation="horizontal" className="my-10" />

          <ProductList
            title="Related Product Items"
            items={suggestedProducts}
          />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
