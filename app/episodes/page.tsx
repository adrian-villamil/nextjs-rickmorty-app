import { getAllEpisodes } from "../api/data";
import EpisodeCard from "../components/EpisodeCard";
import { creepster } from "../fonts";
import styles from './episodes.module.css';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string
  }
}) {
  const currentPage = searchParams?.page || '1';
  const { info, results } = await getAllEpisodes(currentPage);

  return (
    <main className={styles.main}>
      <h1 className={creepster.className}>Episodes</h1>
      <div className={styles.list}>
        {results.map((episode) => (
          <EpisodeCard
            key={episode.id}
            episode={episode}
          />
        ))}
      </div>
    </main>
  );
}