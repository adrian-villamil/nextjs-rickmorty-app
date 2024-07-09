import { getPaginatedEpisodes } from "@/actions/episodes/get-paginated-episodes";
import { CardList } from "@/components/episodes/card";
import { Pagination } from "@/components/pagination";
import { Search } from "@/components/search";
import { Title } from "@/components/title";

interface Props {
  searchParams?: {
    page?: string;
    search?: string;
  }
}

export default async function EpisodesPage({ searchParams }: Props) {
  const page = searchParams?.page ?? '1';
  const name = searchParams?.search ?? '';
  const { info, results } = await getPaginatedEpisodes(page, name);

  return (
    <main className="max-w-screen-xl mx-auto my-6 px-6">
      <Title title="Episodes" />
      <div className="space-y-8">
        <Search />
        <CardList episodes={results} />
        <Pagination totalPages={info.pages} />
      </div>
    </main>
  );
}