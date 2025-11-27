interface ProductDetailsData{
  id:number,
  created_at:string,
  description:string,
  title:string,
  price_before: number,
  price_after: number,
  basic_price:number,
  image_cover: string,
  images: string[],
  stock: number,
  category_id: number,
}