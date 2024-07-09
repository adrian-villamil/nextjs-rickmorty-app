import { Episode } from "@/interfaces/episode.interface";
import { Clapperboard } from "lucide-react";

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
    <div className="w-72 rounded-lg shadow-md bg-card dark:shadow-lime-500 hover:shadow-lg p-5 space-y-4 transition-all duration-300">
      <div className="flex items-center gap-3">
        <div className="min-w-12 min-h-12 bg-blue-500 dark:bg-card border-white dark:border-blue-500 border-4 rounded-full flex justify-center items-center shadow-md dark:shadow-zinc-950">
          <Clapperboard className="stroke-white dark:stroke-blue-500" />
        </div>
        {/* <span className="text-sm text-gray-400">LOCATION</span> */}
        <h1 className="font-bold text-lime-500 leading-tight">{episode.name}</h1>
      </div>
      <div className="space-y-2">
        {/* <h1 className="font-bold text-lime-500 leading-tight">{episode.name}</h1> */}
        <div className="flex flex-col">
          <span className="text-sm text-gray-400">Episode</span>
          <span className="text-sm">{episode.episode}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400">Air Date</span>
          <span className="text-sm">{episode.air_date}</span>
        </div>
      </div>
    </div>
  );
};