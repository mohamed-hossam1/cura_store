export default function ProductCardSkeleton() {
  return (
    <div className="w-full md:min-w-60 min-w-40 bg-white rounded-2xl overflow-hidden shadow-lg mb-2">
      <div className="relative md:h-52 h-30 bg-gray-200 animate-pulse">
      </div>

      <div className="p-5 h-43 flex flex-col justify-around">
        <div className="flex items-center justify-between">
          <div className="h-5 w-9/12 bg-gray-300 rounded animate-pulse"></div>
        </div>

        <div className="flex gap-3">
          <div className="h-5 w-[35px] bg-gray-200 rounded animate-pulse mt-5"></div>
          <div className="h-5 w-[35px] bg-gray-200 rounded animate-pulse mt-5"></div>
        </div>
        
        <div className="h-12 w-full bg-gray-300 rounded-sm animate-pulse mt-2"></div>

      </div>
    </div>
  );
}
