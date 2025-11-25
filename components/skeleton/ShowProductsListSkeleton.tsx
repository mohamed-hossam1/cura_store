import SubTitleSkeleton from "./SubTitleSkeleton";
import CardListSkeleton from "./CardListSkeleton";
export default function ShowProductsSkeleton() {
  return (
    <>
      <div className="max-w-[1600px] px-5 m-auto">
        {[...Array(5)].map((_, i) => (
          <div key={i}>
            <SubTitleSkeleton />
            <CardListSkeleton />
          </div>
        ))}
      </div>
    </>
  );
}
