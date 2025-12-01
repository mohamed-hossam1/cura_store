"use server";

import { createClient } from "@/lib/supabase/server";

export async function getCartSupa() {
  const supabase = await createClient()
  const {data:user} = await supabase.auth.getUser()
  if(user?.user){
    const {data:cart, error} = await supabase.from("cart_items")
    .select(`quantity, products(id, title, price_before, price_after, image_cover, categories(title) )`)
    .eq("user_id",user?.user.id)
    return cart
  }
  else{
    return []
  }
}


export async function updateCartSupa(productId:number, quantity:number) {
  const supabase = await createClient()
  const {data:user} = await supabase.auth.getUser()
  if(user?.user){
    const {data:cart, error} = await supabase.from("cart_items")
    .update({quantity: quantity})
    .eq("user_id",user.user.id)
    .eq("product_id",productId)
    .select(`quantity, products(id, title, price_before, price_after, image_cover, categories(title) )`)
    return cart
  }
  else{
    return []
  }
}


export async function addToCartSupa(productId:number, quantity:number) {
  const supabase = await createClient()
  const {data:user} = await supabase.auth.getUser()
  if(user?.user){
    const {data:cart, error} = await supabase.from("cart_items")
    .insert({quantity: quantity, "product_id": productId, "user_id":user.user.id})
    .select(`quantity, products(id, title, price_before, price_after, image_cover, categories(title) )`)
    return {cart,error}
  }
  else{
    return []
  }
}

export async function removeFromCartSupa(productId:number) {
  const supabase = await createClient()
  const {data:user} = await supabase.auth.getUser()
  if(user?.user){
    const {data:cart, error} = await supabase.from("cart_items")
    .delete()
    .eq("user_id",user.user.id)
    .eq("product_id",productId)
    return cart
  }
  else{
    return []
  }
}


export async function clearCartSupa() {
  const supabase = await createClient()
  const {data:user} = await supabase.auth.getUser()
  if(user?.user){
    const {data:cart, error} = await supabase.from("cart_items")
    .delete()
    .eq("user_id",user.user.id)
    return cart
  }
  else{
    return []
  }
}