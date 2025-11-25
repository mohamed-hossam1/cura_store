import { getAllProduct } from "@/app/actions/productsAction";
import SubTitle from "./SubTitle";
import CardList from "./CardList";


interface GroupedProducts {
  [categoryName: string]: ProductData[];
}

export default async function ShowProducts() {
  const { data: products } = (await getAllProduct()) || { data: [] };

  const categoryId: number[] = [];

  const categoryImage: string[] = [];

  const grouped: GroupedProducts = products?.reduce<GroupedProducts>((acc, item) => {
    const categoryName = item.categories?.title || "Unknown";

    if (!acc[categoryName]) {
      acc[categoryName] = [];
      categoryImage.push(item.categories?.image || "");
      categoryId.push(item.categories?.id || 0);
    }

    acc[categoryName].push(item);

    return acc;
  }, {}) || {};

  return (
    <div className="max-w-[1600px] px-5 m-auto">
      {Object.entries(grouped).map(([categoryTitle, products], i) => (
        <div key={categoryId[i]}>
          <SubTitle 
            categoryTitle={categoryTitle} 
            categoryImage={categoryImage[i]} 
            categoryId={categoryId[i]} 
          />
          <CardList products={products} />
        </div>
      ))}
    </div>
  );
}