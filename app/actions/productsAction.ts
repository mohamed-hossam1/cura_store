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
      categories ( title )
    `).eq("is_deleted", false)
  return {data,error}
}