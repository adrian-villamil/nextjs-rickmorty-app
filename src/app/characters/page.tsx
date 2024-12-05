import type { Metadata } from "next";
import { getPaginatedCharacters } from "@/actions/characters/get-paginated-characters";
import { CardList } from "@/components/characters/card";
import { Pagination } from "@/components/pagination";
import { Search } from "@/components/search";
import { Title } from "@/components/title";

interface Props {
  searchParams?: { 
    page?: string;
    search?: string; 
  };
}

export const metadata: Metadata = {
  title: 'Characters Page',
  description: 'Page where list all characters from the rick and morty tv show',
};

export default async function CharactersPage({ searchParams }: Props) {
  const page = searchParams?.page ?? '1';
  const search = searchParams?.search ?? '';
  const { info, results } = await getPaginatedCharacters(page, search);

  return (
    <main className="max-w-screen-xl my-6 px-6 mx-auto">
      <Title title="Characters" />
      <div className="space-y-8">
        <Search />
        <CardList characters={results} />
        <Pagination totalPages={info.pages} />
      </div>
    </main>
  );
}