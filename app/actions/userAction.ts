"use server";

import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";



export async function SignUpSupabase({
  name,
  email,
  password,
  phone,
}: UserData) {
  const supabase = await createClient();

  const { data: authUser, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signUpError) {
    return { signUpError, addUserError: null };
  }

  const userId = authUser?.user?.id || "";

  const { error: addUserError } = await supabase
    .from("users")
    .insert({ id: userId, name, phone, email, role: "user" });

  if (addUserError) {
    DeleteUser(userId);
    return { signUpError: null, addUserError };
  }

  return { signUpError: null, addUserError: null };
}

export async function SignInSupabase({ email, password }: UserData) {
  const supabase = await createClient();
  const { error: signInError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { signInError };
}

export async function SignOutSupabase() {
  const supabase = await createClient();
  const { error: signOutError } = await supabase.auth.signOut();

  return { signOutError };
}

export async function DeleteUser(id: string) {
  const admin = createAdminClient();
  console.log(await admin.auth.admin.deleteUser(id));
}

export async function GetUser() {
  const subabase = await createClient();
  const response = await subabase.auth.getUser();
  if(response.data.user?.id){
    const { data: userProfile, error } = await subabase.from("users").select("*").eq("id",response.data.user?.id).single();
    if (error) {
      console.error("Error fetching user profile:", error);
      return null;
    }

    return userProfile;
  }
  return null;
}

