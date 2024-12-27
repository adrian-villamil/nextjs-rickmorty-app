import Image from "next/image";
import Link from "next/link";
import { getCharactersFromUrls } from "@/actions/characters/get-characters-from-urls";

interface Props {
  charactersUrls: string[];
}

export const CharacterAvatarGrid = async ({ charactersUrls }: Props) => {
  const characters = await getCharactersFromUrls(charactersUrls ?? []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
      {characters.map((character) => (
        <div
          key={character.id}
          className="flex items-center gap-2"
        >
          <Link
            href={`/characters/${character.id}`}
            className="size-10 rounded-full overflow-hidden flex-none"
          >
            <Image
              src={character.image}
              alt={character.name}
              width={40}
              height={40}
              priority
            />
          </Link>
          <div className="flex flex-col overflow-hidden">
            <Link
              href={`/characters/${character.id}`}
              className="text-sm sm:text-base text-sky-500 text-ellipsis hover:underline hover:underline-offset-2 whitespace-nowrap overflow-hidden"
              title={character.name}
            >
              {character.name}
            </Link>
            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{character.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
};