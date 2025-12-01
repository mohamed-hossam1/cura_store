"use client";
import UserMenu from "./UserMenu";
import { useUser } from "@/Context/UserContext";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import { useEffect, useState } from "react";

export default function UserControl() {
  const {user, isLoading} = useUser();

  if (isLoading) {
    return <UserMenu user={null} />;
  }

  return (
    <>
      {!user ? (
        <>
          <div className="hidden lg:flex">
            <Link
              href={ROUTES.SIGNIN}
              className="border-2 rounded-xl py-2.5 px-4 hover:bg-gray-100 transition-all duration-300 text-primary hover:text-primary-hover"
            >
              Login
            </Link>
          </div>
          <div className="hidden lg:flex">
            <Link
              href={ROUTES.SIGNUP}
              className="border-2 rounded-xl py-2.5 px-4 bg-primary text-white hover:bg-primary-hover transition-all duration-300"
            >
              Sign Up
            </Link>
          </div>
          <div className={`flex  lg:hidden`}>
            <UserMenu user={user} />
          </div>
        </>
      ) : (
        <div className={`flex ${!user && "lg:hidden"}`}>
          <UserMenu user={user} />
        </div>
      )}
    </>
  );
}
