import Image from "next/image";
import Link from "next/link";

import ROUTES from "@/constants/routes";
import LangToggle from "./LangToggle";
import Searchbar from "./Search";
import UserControl from "./UserControl";


export default function Navbar() {


  return (
    <div className="shadow-lg">
      <div className="flex max-w-[1600px] px-5 m-auto justify-between lg:justify-center items-center gap-5">
        <Link href={ROUTES.HOME}>
          <div className="relative w-[70px] h-[70px] transition-all duration-300 hover:scale-110">
            <Image
              src="/cura-logo.png"
              alt="Logo"
              fill
              sizes="70px"
              priority
              className="object-contain"
            />
          </div>

        </Link>

        <div className="flex justify-between lg:justify-between items-center lg:flex-1 gap-5">
          <div className="flex-1 hidden lg:flex">
            <Searchbar />
          </div>
          <div className="hidden lg:flex">
            <LangToggle />
          </div>

          <div>
            <Link
              className="relative p-2 text-primary transition-all duration-300"
              href={ROUTES.CART}
            >
              <svg
                className="w-6 h-6 hover:animate-wiggle hover:text-primary-hover"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8"
                ></path>
              </svg>
            </Link>
          </div>

          <UserControl />
          

        </div>
      </div>
      <div className="flex lg:hidden py-2.5 border-t border-gray-100 ">
        <Searchbar />
      </div>
    </div>
  );
}
