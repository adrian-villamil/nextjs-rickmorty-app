import type { Metadata } from "next";
import { getPaginatedCharacters } from "@/actions/characters/get-paginated-characters";
import { CardList } from "@/components/characters/card";
import { Pagination } from "@/components/pagination";
import { Search } from "@/components/search";
import { Title } from "@/components/title";
import { GenderSelect } from "@/components/characters/gender-select";
import { StatusSelect } from "@/components/characters/status-select";

interface Props {
  searchParams?: {
    page?: string;
    name?: string;
    gender?: string;
    status?: string;
  };
}

export const metadata: Metadata = {
  title: 'Characters Page',
  description: 'Page where list all characters from the rick and morty tv show',
};

export default async function CharactersPage({ searchParams }: Props) {
  const page = searchParams?.page ?? '1';
  const name = searchParams?.name ?? '';
  const gender = searchParams?.gender ?? '';
  const status = searchParams?.status ?? '';
  const { info, results } = await getPaginatedCharacters(page, name, gender, status);

  return (
    <main className="max-w-screen-xl my-6 px-6 mx-auto">
      <Title title="Characters" />
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Search />
          <GenderSelect />
          <StatusSelect />
        </div>
        <CardList characters={results} />
        <Pagination totalPages={info.pages} />
      </div>
    </main>
  );
}