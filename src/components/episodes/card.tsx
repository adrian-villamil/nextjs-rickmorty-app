import Link from "next/link";
import { Clapperboard } from "lucide-react";
import { Episode } from "@/interfaces/episode.interface";

interface CardListProps {
  episodes: Episode[];
}

export const CardList = ({ episodes }: CardListProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {episodes.map((episode) => (
        <CardItem key={episode.id} episode={episode} />
      ))}
    </div>
  );
};

interface CardItemProps {
  episode: Episode;
}

export const CardItem = ({ episode }: CardItemProps) => {
  return (
    <div className="w-72 border rounded-lg bg-card shadow-md hover:shadow-lg p-5 space-y-4 transition-all duration-300">
      <div className="flex items-center gap-3">
        <div className="min-w-12 min-h-12 bg-orange-500 dark:bg-card border-white dark:border-orange-500 border-4 rounded-full flex justify-center items-center shadow-md dark:shadow-zinc-950">
          <Clapperboard className="stroke-white dark:stroke-orange-500" />
        </div>
        <Link
          href={`/episodes/${episode.id}`}
          className="font-bold text-sky-400 leading-tight"
        >
          {episode.name}
        </Link>
      </div>
      <div className="space-y-2">
        <div className="flex flex-col">
          <span className="text-sm text-muted-foreground">Episode</span>
          <span className="text-sm">{episode.episode}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-muted-foreground">Air Date</span>
          <span className="text-sm">{episode.air_date}</span>
        </div>
      </div>
    </div>
  );
};