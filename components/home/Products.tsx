import ShowProducts from "../showProducts/ShowProducts";
import ShowProductsSkeleton from "../skeleton/ShowProductsListSkeleton";
import { Suspense } from "react";

export const experimental_ppr = true;
export default function Products() {
  return (
    <>
      <Suspense fallback={<ShowProductsSkeleton />}>
        <ShowProducts />
      </Suspense>
    </>
  );
}
