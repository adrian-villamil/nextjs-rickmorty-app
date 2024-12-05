import type { Metadata } from "next";
import { getPaginatedLocations } from "@/actions/locations/get-paginated-locations";
import { CardList } from "@/components/locations/card";
import { Pagination } from "@/components/pagination";
import { Search } from "@/components/search";
import { Title } from "@/components/title";

interface Props {
  searchParams?: {
    page?: string;
    search?: string;
  }
}

export const metadata: Metadata = {
  title: 'Locations Page',
  description: 'Page where list all locations from the rick and morty tv show',
};

export default async function LocationsPage({ searchParams }: Props) {
  const page = searchParams?.page ?? '1';
  const search = searchParams?.search ?? '';
  const { info, results } = await getPaginatedLocations(page, search);

  return (
    <main className="max-w-screen-xl mx-auto my-6 px-6">
      <Title title="Locations" />
      <div className="space-y-8">
        <Search />
        <CardList locations={results} />
        <Pagination totalPages={info.pages} />
      </div>
    </main>
  );
}