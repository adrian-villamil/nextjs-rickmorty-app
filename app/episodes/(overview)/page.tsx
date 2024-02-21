import { Metadata } from "next";
import { getAllEpisodes } from "../../api/episodes";
import EpisodeCard from "../../components/EpisodeCard";
import Pagination from "../../components/Pagination";
import { creepster } from "../../fonts";
import styles from './episodes.module.css';

export const metadata: Metadata = {
  title: 'Episodes Page',
  description: 'Page where you can see all rick and morty episodes',
};

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
      <Pagination
        pages={info.pages}
        currentPage={Number(currentPage) - 1}
      />
    </main>
  );
}