import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getEpisodeById } from "@/actions/episodes/get-episode-by-id";
import { CharactersGridSkeleton } from "@/components/skeletons";
import { CharacterAvatarGrid } from "@/components/character-avatar-grid";

interface Props {
  params: { id: string };
}

export default async function EpisodePage({ params }: Props) {
  const episode = await getEpisodeById(params.id);

  if (!episode) {
    notFound();
  }

  return (
    <div className="w-full xl:w-[1280px] mx-auto my-6 px-6 space-y-4 divide-y">
      <div className="space-y-4 py-8">
        <h1 className="text-2xl text-center sm:text-4xl md:text-5xl sm:text-left font-bold dark:text-primary">
          {episode.name}
        </h1>
        <div className="space-y-1">
          <EpisodeAttribute label="Episode" value={episode.episode} />
          <EpisodeAttribute label="Air Date" value={episode.air_date} />
          <EpisodeAttribute label="Created" value={episode.created.toString()} />
        </div>
      </div>
      <div className="pt-8 space-y-6">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold dark:text-primary">Characters</h2>
        <Suspense fallback={<CharactersGridSkeleton />}>
          <CharacterAvatarGrid charactersUrls={episode.characters} />
        </Suspense>
      </div>
    </div>
  );
}

interface EpisodeAttributeProps {
  label: string;
  value: string;
}

const EpisodeAttribute = ({ label, value }: EpisodeAttributeProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-[100px_auto]">
      <span className="text-sm md:text-base text-muted-foreground">{label}</span>
      <span className="text-sm md:text-base">{value}</span>
    </div>
  );
};