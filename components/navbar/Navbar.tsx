import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ROUTES from "@/constants/routes";

export default function Navbar() {
  return (
    <div className="flex mx-20 justify-between shadow-2x">
      <Link href={ROUTES.HOME}>
        <Image
          src="/logo.png"
          width={80}
          height={80}
          priority={true} 
          alt="Picture of the author"
          className="transition-all duration-300 hover:scale-110 h-auto "
        />
      </Link>

      <div>
        <input type="text" />
        <Search />
      </div>

      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>EN</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>عربي</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div>
        <Link
          className="relative p-2 text-gray-600 transition-all duration-300"
          href={ROUTES.CART}
        >
          <svg
            className="w-6 h-6 hover:animate-wiggle hover:text-primary"
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
    </div>
  );
}
