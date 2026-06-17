export function ProductCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="aspect-[3/4] bg-off-white" />
      <div className="pt-4 flex items-start justify-between gap-4">
        <div className="space-y-2 flex-1">
          <div className="h-3 bg-line/80 rounded w-3/4" />
          <div className="h-3 bg-line/60 rounded w-1/3" />
        </div>
        <div className="h-3 bg-line/80 rounded w-12" />
      </div>
    </div>
  );
}
