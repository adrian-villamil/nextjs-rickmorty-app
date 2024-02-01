import { getCharacterById } from "@/app/api/data";
import { Character } from "@/app/types/api-types";

export default async function Page({
  params
}: {
  params: { id: string }
}) {
  const characterId = params.id;
  const character = await getCharacterById(characterId) as Character;

  return (
    <main>
      <h1>{character.name}</h1>
    </main>
  );
}