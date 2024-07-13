import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getLocationById } from "@/actions/locations/get-location-by-id";
import { CharactersGridSkeleton } from "@/components/skeletons";
import { CharacterAvatarGrid } from "@/components/character-avatar-grid";

interface Props {
  params: { id: string };
}

export default async function LocationPage({ params }: Props) {
  const location = await getLocationById(params.id);

  if (!location) {
    notFound();
  }

  return (
    <div className="w-full xl:w-[1280px] mx-auto my-6 px-6 space-y-4 divide-y">
      <div className="space-y-4 py-8">
        <h1 className="text-2xl text-center sm:text-4xl md:text-5xl sm:text-left font-bold dark:text-primary">
          {location.name}
        </h1>
        <div className="space-y-1">
          <LocationAttribute label="Type" value={location.type} />
          <LocationAttribute label="Dimension" value={location.dimension} />
          <LocationAttribute label="Created" value={location.created.toString()} />
        </div>
      </div>
      <div className="pt-8 space-y-6">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold dark:text-primary">Residents</h2>
        <Suspense fallback={<CharactersGridSkeleton />}>
          <CharacterAvatarGrid charactersUrls={location.residents} />
        </Suspense>
      </div>
    </div>
  );
}

interface LocationAttributeProps {
  label: string;
  value: string;
}

const LocationAttribute = ({ label, value }: LocationAttributeProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-[100px_auto]">
      <span className="text-sm md:text-base text-muted-foreground">{label}</span>
      <span className="text-sm md:text-base">{value}</span>
    </div>
  );
};