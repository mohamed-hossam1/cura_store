"use server";

import { createClient } from "@/lib/supabase/server";

export async function getAllProduct() {
  const supabase = await createClient()
  const {data, error} = await supabase.from("products").select(`
      id,
      title,
      price_before,
      price_after,
      image_cover,
      stock,
      categories ( title, image, id )
    `).eq("is_deleted", false)
  return {data,error}
}

export async function getProductDetails(id:number) {
  const supabase = await createClient()
  const {data, error} = await supabase.from("products").select(`
      *
      categories ( title, id )
    `).eq("id", id)
  return {data,error}
}