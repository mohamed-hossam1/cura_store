
export default function QuantityProductSkeleton() {


  return (
    <>
      <div className=" mb-10">
        <p className="text-xl font-semibold">Quantity:</p>
        <div className="flex w-full justify-center mt-20 gap-5">
          <button
            className="w-13 h-13 rounded-full hover:bg-primary text-6xl flex justify-center items-center border-2 border-primary text-primary hover:text-white transition-all duration-300 cursor-pointer"
          >
            <span className="relative -top-[2px]">-</span>
          </button>

          <button
            className="w-13 h-13 rounded-full hover:bg-primary text-3xl font-semibold flex justify-center items-center border-2 border-primary text-primary hover:text-white transition-all duration-300 cursor-pointer"
          >
            <span className="relative -top-[1px]">+</span>
          </button>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl  p-4 space-y-2 mb-14">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Unit Price:</span>
          <span className="font-semibold flex gap-2 text-gray-900">
            EGP 
            <div className="w-12 bg-gray-200 animate-pulse h-6"></div>
          </span>
        </div>
        <div className="flex justify-between items-center text-lg">
          <span className="font-medium text-lg text-gray-900">Total Price:</span>
          <div className="flex flex-col">
            <span className="font-bold text-2xl text-[#1F1F6F] flex gap-2">
              EGP 
              <div className="w-12 bg-gray-200 animate-pulse h-6"></div>
            </span>
            <span className="font-bold  relative -right-3 text-lg text-right text-[#1F1F6F] line-through flex gap-2">
              EGP
              <div className="w-12 bg-gray-200 animate-pulse h-6"></div>
            </span>

          </div>
        </div>
      </div>

      <button>
        <p className="h-full w-full md:text-xl text-white flex justify-center items-center font-bold transition-all duration-300">
            {`Add  Unit(s) to Cart - EGP `}
        </p>
        
      </button>
    </>
  );
}
