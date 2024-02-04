import { getAllLocations } from "../api/data";
import { creepster } from "../fonts";
import LocationCard from "../components/LocationCard";
import Pagination from "../components/Pagination";
import styles from './locations.module.css';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string,
  },
}) {
  const currentPage = searchParams?.page || '1';
  const { info, results } = await getAllLocations(currentPage);

  return (
    <main className={styles.main}>
      <h1 className={creepster.className}>Locations</h1>
      <div className={styles.list}>
        {results.map((location) => (
          <LocationCard
            key={location.id}
            location={location} />
        ))}
      </div>
      <Pagination
        pages={info.pages}
        currentPage={Number(currentPage) - 1}
      />
    </main>
  );
}