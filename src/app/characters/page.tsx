import { getPaginatedCharacters } from "@/actions/characters/get-paginated-characters";
import { CardList } from "@/components/characters/card";

export default async function CharactersPage() {
  const { info, results } = await getPaginatedCharacters();

  return (
    <div>
      <h1 className="text-center text-5xl my-6">Characters Page</h1>
      <div>
        <CardList characters={results} />
      </div>
    </div>
  );
}