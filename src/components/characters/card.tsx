import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Character } from "@/interfaces/character.interface"

interface CardListProps {
  characters: Character[];
}

export const CardList = ({ characters }: CardListProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {characters.map((character) => (
        <CardItem key={character.id} character={character} />
      ))}
    </div>
  );
};

interface CardItemProps {
  character: Character;
}

export const CardItem = ({ character }: CardItemProps) => {
  return (
    <div className="flex flex-col w-56 border rounded-xl shadow-md hover:shadow-lg overflow-hidden bg-card transition-all duration-300">
      <Link href={`/characters/${character.id}`} className="w-56 h-56 overflow-hidden">
        <Image
          src={character.image}
          alt={character.name}
          width={300}
          height={300}
          priority
          className="w-full h-auto hover:scale-110 transition-all"
        />
      </Link>
      <div className="flex flex-col flex-1 gap-[6px] p-4">
        <div>
          <Link
            href={`/characters/${character.id}`}
            className="font-bold text-primary hover:underline hover:underline-offset-2"
          >
            {character.name}
          </Link>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-muted-foreground text-sm">Gender</span>
          <span className={clsx(
            "text-sm text-white px-3 py-[2px] rounded-xl",
            { "bg-blue-500": character.gender === 'Male' },
            { "bg-pink-500": character.gender === 'Female' },
            { "bg-gray-500": character.gender === 'Genderless' },
            { "bg-neutral-800": character.gender === 'unknown' }
          )}>
            {character.gender}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground text-sm">Status</span>
          <span className={clsx(
            "text-sm text-white px-3 py-[2px] rounded-xl",
            { "bg-green-500": character.status === 'Alive' },
            { "bg-red-500": character.status === 'Dead' },
            { "bg-neutral-800": character.status === 'unknown' }
          )}>
            {character.status}
          </span>
        </div>
      </div>
    </div>
  );
};