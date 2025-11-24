import ROUTES from "@/constants/routes";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface SubTitleProp{
  title:string
}

export default function SubTitle({title}:SubTitleProp) {
  return (
    <div className='flex justify-between text-gray-800 relative mb-10'>
      <div>
        <div><h2 className="md:text-2xl text-xl font-bold">{title}</h2></div>
      </div>
      <div>
        <div>
          <Link href={ROUTES.PRODUCTS} className="flex  items-center">
            <p className="text-lg text-primary font-bold">Show All</p>
            <ChevronRight className="text-primary font-bold w-10 " size={25} />
            
            
          </Link>
        </div>
      </div>
      <div className='border-gray-300 w-full absolute bottom-[1px] -z-10'></div>
    </div>
  );
}