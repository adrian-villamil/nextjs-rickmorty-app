import { Clapperboard } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export const CharactersGridSkeleton = () => {
  const items = Array.from({ length: 15 }).map((_, i) => i + 1);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-2">
          <Skeleton className="size-10 rounded-full flex-none" />
          <div className="flex flex-col gap-2">
            <Skeleton className="w-16 sm:w-24 h-3 sm:h-4" />
            <Skeleton className="w-8 sm:w-12 h-2 sm:h-3" />
          </div>
        </div>
      ))}
    </div>
  )
};

export const EpisodesGridSkeleton = () => {
  const items = Array.from({ length: 15 }).map((_, i) => i + 1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1 sm:gap-2 md:gap-3">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-2">
          <Clapperboard className="w-4 h-4 flex-none sm:w-5 sm:h-5 md:w-6 md:h-6 stroke-gray-400" />
          <Skeleton className="w-48 sm:w-60 h-3 sm:h-4" />
        </div>
      ))}
    </div>
  );
};