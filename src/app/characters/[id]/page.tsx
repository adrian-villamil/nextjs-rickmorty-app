import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Clapperboard } from "lucide-react";
import { getCharacterById } from "@/actions/characters/get-character-by-id";
import { getEpisodesFromUrls } from "@/actions/episodes/get-episodes-from-urls";
import { EpisodesGridSkeleton } from "@/components/skeletons";

interface Props {
  params: { id: string };
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const character = await getCharacterById(params.id);

  return {
    title: character?.name,
    description: 'Character page info',
  };
};

export default async function CharacterPage({ params }: Props) {
  const character = await getCharacterById(params.id);

  if (!character) {
    notFound();
  }

  return (
    <div className="w-full xl:w-[1280px] mx-auto my-6 px-6 space-y-4 divide-y">
      <div className="w-full md:w-fit md:mx-auto flex flex-col sm:flex-row gap-8 py-8">
        <Image
          src={character.image}
          alt={character.name}
          width={300}
          height={300}
          priority
          className="w-56 mx-auto sm:w-64 sm:mx-0 md:w-auto rounded-md sm:rounded-lg md:rounded-xl"
        />
        <div className="space-y-4">
          <h1 className="text-2xl text-center sm:text-4xl md:text-5xl sm:text-left font-bold dark:text-primary">
            {character.name}
          </h1>
          <div className="space-y-1">
            <CharacterAttribute label="Status" value={character.status} />
            <CharacterAttribute label="Species" value={character.species} />
            <CharacterAttribute label="Type" value={character.type || '---'} />
            <CharacterAttribute label="Gener" value={character.gender} />
            <CharacterAttribute label="Origin" value={character.origin.name} href={character.origin.url} />
            <CharacterAttribute label="Location" value={character.location.name} href={character.location.url} />
            <CharacterAttribute label="Created" value={character.created.toString()} />
          </div>
        </div>
      </div>
      <div className="pt-8 space-y-6">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold dark:text-primary">Episodes</h2>
        <Suspense fallback={<EpisodesGridSkeleton />}>
          <EpisodesGrid episodesUrls={character.episode} />
        </Suspense>
      </div>
    </div>
  );
}

interface CharacterAttributeProps {
  label: string;
  value: string;
  href?: string;
}

const CharacterAttribute = ({ label, value, href }: CharacterAttributeProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-[100px_auto]">
      <span className="text-sm md:text-base text-muted-foreground">{label}</span>
      {href ? (
        <Link
          href={`/locations/${href.slice(40)}`}
          className="text-sm md:text-base text-sky-500 hover:underline hover:underline-offset-2"
        >
          {value}
        </Link>
      ) : (
        <span className="text-sm md:text-base">{value}</span>
      )}
    </div>
  );
};

interface EpisodesGridProps {
  episodesUrls: string[];
}

const EpisodesGrid = async ({ episodesUrls }: EpisodesGridProps) => {
  const episodes = await getEpisodesFromUrls(episodesUrls ?? []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1 sm:gap-2 md:gap-3">
      {episodes.map((episode) => (
        <div
          key={episode.id}
          className="flex items-center gap-2"
        >
          <Clapperboard className="w-4 h-4 flex-none sm:w-5 sm:h-5 md:w-6 md:h-6 stroke-gray-400" />
          <Link
            href={`/episodes/${episode.id}`}
            className="text-sm sm:text-base text-sky-500 text-ellipsis hover:underline hover:underline-offset-2 overflow-hidden whitespace-nowrap"
            title={episode.name}
          >
            {episode.name}
          </Link>
        </div>
      ))}
    </div>
  );
};