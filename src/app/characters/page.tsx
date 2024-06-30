import { getPaginatedCharacters } from "@/actions/characters/get-paginated-characters";
import { CardList } from "@/components/characters/card";

export default async function CharactersPage() {
  const { info, results } = await getPaginatedCharacters();

  return (
    <main className="my-6 px-6">
      <h1 className="text-center text-4xl sm:text-5xl font-bold mb-6 dark:text-lime-500">Characters</h1>
      <div>
        <CardList characters={results} />
      </div>
    </main>
  );
}