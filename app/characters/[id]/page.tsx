import { getCharacterById } from "@/app/api/data";

export default async function Page({
  params
}: {
  params: { id: string }
}) {
  const characterId = params.id;
  const character = await getCharacterById(characterId);

  return (
    <main>
      <h1>{character.name}</h1>
    </main>
  );
}