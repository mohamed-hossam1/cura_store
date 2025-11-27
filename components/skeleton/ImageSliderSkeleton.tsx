
export default function ImageSliderSkeleton() {
  return (
    <section className="mx-6 items-center relative">
      <div className="relative h-[420px] mb-6 rounded-2xl overflow-hidden bg-gray-200  animate-pulse">
        <div className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"/>
      </div>

      <div className="flex gap-3 items-center justify-center flex-wrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className={`cursor-pointer w-16 h-16 md:w-20 md:h-20 border-2 rounded-xl object-cover transition-all duration-300 bg-gray-200  animate-pulse`}/>
        ))}
      </div>
    </section>
  );
}
