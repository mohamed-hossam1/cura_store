interface ProductData{
  id:number,
  title:string,
  price_before: number,
  price_after: number,
  image_cover: string,
  stock: number,
  categories: { title: string, image:string, id:number }
}