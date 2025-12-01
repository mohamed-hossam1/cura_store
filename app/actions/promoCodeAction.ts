"use server";

import { createClient } from "@/lib/supabase/server";

export async function getPromo(promoCode: string) {
  const supabase = await createClient()
  const {data, error} = await supabase.from("coupons").select(`*`).eq("code", promoCode)
  return {data,error}
}