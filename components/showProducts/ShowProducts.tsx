import { getAllProduct } from "@/app/actions/productsAction";
import SubTitle from "./SubTitle";

type Product = {
  id: number;
  title: string;
  price_after: number;
  price_before: number;
  stock: number;
  image_cover: { url: string };
  categories: { title: string };
};

export default async function ShowProducts() {
  const {data:products} = (await getAllProduct()) as Product[] || [];

  const safeProducts = Array.isArray(products) ? products : [];

  const grouped = safeProducts.reduce((acc: Record<string, Product[]>, item) => {
    const categoryName = item.categories?.title || "Unknown";

    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }

    acc[categoryName].push(item);

    return acc;
  }, {});


  return <div className="max-w-[1600px] px-5 m-auto">
    {
      Object.entries(grouped)?.map(([category, products],i)=>
        <SubTitle key={i} title={category}/>
      )
    }
  
  </div>;
}
