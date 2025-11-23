import Navbar from "@/components/navbar/Navbar";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="min-h-screen from-slate-50 via-white to-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Link
                href={ROUTES.HOME}
                className="flex items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <Image
                  src="/logo.png"
                  width={120}
                  height={120}
                  alt="Picture of the author"
                  priority={true} 
                  className="transition-all duration-300 hover:scale-110 h-auto "
                />
              </Link>
            </div>
          </div>

          {children}
        </div>
      </div>
    </>
  );
}
