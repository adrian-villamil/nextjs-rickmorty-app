import { Location } from "@/interfaces/location.interface";
import { MapPin } from "lucide-react";

interface CardListProps {
  locations: Location[];
}

export const CardList = ({ locations }: CardListProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {locations.map((location) => (
        <CardItem key={location.id} location={location} />
      ))}
    </div>
  );
};

interface CardItemProps {
  location: Location;
}

export const CardItem = ({ location }: CardItemProps) => {
  return (
    <div className="w-72 rounded-lg shadow-md bg-card dark:shadow-lime-500 hover:shadow-lg p-5 space-y-4 transition-all duration-300">
      <div className="flex items-center gap-3">
        <div className="min-w-12 min-h-12 bg-rose-500 dark:bg-card border-white dark:border-rose-500 border-4 rounded-full flex justify-center items-center shadow-md dark:shadow-zinc-950">
          <MapPin className="stroke-white dark:stroke-rose-500" />
        </div>
        {/* <span className="text-sm text-gray-400">LOCATION</span> */}
        <h1 className="font-bold text-lime-500 leading-tight">{location.name}</h1>
      </div>
      <div className="space-y-2">
        {/* <h1 className="font-bold text-lime-500 leading-tight">{location.name}</h1> */}
        <div className="flex flex-col">
          <span className="text-sm text-gray-400">Type</span>
          <span className="text-sm">{location.type}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400">Dimension</span>
          <span className="text-sm">{location.dimension}</span>
        </div>
      </div>
    </div>
  );
};