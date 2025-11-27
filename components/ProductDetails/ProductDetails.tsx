import { getProductDetails } from "@/app/actions/productsAction";
import QuantityProduct from "./QuantityProduct";
import RelatedProducts from "./RelatedProducts";
import { Suspense } from "react";
import CardListSkeleton from "../skeleton/CardListSkeleton";
import ImageSlider from "./ImageSlider";

export default async function ProductDetails({ id }: { id: string }) {
  const { data: product }: { data: ProductDetailsData } =
    await getProductDetails(id);

  return (
    <div className="max-w-[1450px] px-5 m-auto mt-12">
      <div className="w-11/12 m-auto">
        <div className="md:flex justify-between mb-6">
          <div className="flex-8  justify-center items-center bg-white mr-16">
            <div className="flex w-full flex-col gap-4 ">
              <div className="mb-6">
                <ImageSlider images={product.images} />
              </div>

              <div>
                {product.stock > 0 ? (
                  <div className="flex flex-wrap gap-2 items-center text-lg border-b pb-7">
                    <span className="px-3 py-1 bg-green-100 text-green-800  font-medium rounded-full">
                      In Stock
                    </span>
                    <span className="text-black font-semibold  ">
                      {product.stock}
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2 items-center text-lg border-b pb-7">
                    <span className="px-3 py-1 bg-red-100 text-red-800  font-medium rounded-full">
                      Out Of Stock
                    </span>
                    <span className="text-black font-semibold  ">
                      {product.stock}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex-10 pt-5">
            <h1 className="text-3xl font-bold mb-10">{product.title}</h1>
            <QuantityProduct product={product} />
          </div>
        </div>
        <div className="mb-20">
          <div className="flex border-b ">
            <span className="py-1 text-lg text-primary border-b-2 border-primary font-medium ">
              Description
            </span>
          </div>
          <h2 className="pt-4 text-xl font-semibold">{product.description}</h2>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-10">Related Products</h3>
          <Suspense fallback={<CardListSkeleton />}>
            <RelatedProducts
              categoryId={product.category_id}
              prodactId={product.id}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
