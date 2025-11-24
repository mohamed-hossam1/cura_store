import ProductCardSkeleton from "./ProductCardSkeleton";

export default function CardListSkeleton() {
  return (
    <div className="relative">
      <div className="flex overflow-auto custom-scroll mb-20 gap-4">
        {[...Array(5)].map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}