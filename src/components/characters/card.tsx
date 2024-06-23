import { Character } from "@/interfaces/character.interface"
import Image from "next/image";

interface CardListProps {
  characters: Character[];
}

export const CardList = ({ characters }: CardListProps) => {
  return (
    <div className="grid grid-cols-min-1 sm:grid-cols-min-2 md:grid-cols-min-3 lg:grid-cols-min-4 xl:grid-cols-min-5 justify-center gap-8 max-w-screen-xl mx-auto">
      {characters.map((character) => (
        <CardItem character={character} />
      ))}
    </div>
  );
};

interface CardItemProps {
  character: Character;
}

export const CardItem = ({ character }: CardItemProps) => {
  return (
    <div className="flex flex-col w-52 rounded-lg overflow-hidden shadow-md dark:text-green-500 dark:shadow-green-500/80 hover:shadow-lg transition-all duration-50000">
      <Image
        src={character.image}
        alt={character.name}
        width={300}
        height={300}
        priority
        className="w-full h-auto"
      />
      <div className="flex flex-col flex-1 gap-1 p-4">
        <h1 className="font-bold">{character.name}</h1>
        <div className="flex justify-between mt-auto">
          <span className="text-sm text-slate-500">Gender</span>
          <span className="text-sm text-slate-500">{character.gender}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-slate-500">Status</span>
          <span className="text-sm text-slate-500">{character.status}</span>
        </div>
      </div>
    </div>
  );
};