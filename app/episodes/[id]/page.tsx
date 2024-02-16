import { Suspense } from "react";
import { getEpisodeById } from "@/app/api/episodes";
import { BsDashCircleFill } from "react-icons/bs";
import CharacterList from "@/app/components/CharacterList";
import { CardListSkeleton } from "@/app/components/Skeletons/cardlist";
import styles from './episode.module.css';

export default async function Page({
  params,
}: {
  params: { id: string }
}) {
  const episodeId = params.id;
  const episode = await getEpisodeById(episodeId);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles['episode-container']}>
          <h1 className={styles['episode-name']}>{episode.name}</h1>
          <div className={styles['episode-info']}>
            <span>Episode:</span>
            <span>
              {episode.episode}
            </span>
            <span>Air date:</span>
            <span>
              {episode.air_date}
            </span>
            <span>Created:</span>
            <span>
              {new Date(episode.created).toLocaleString()}
            </span>
          </div>
        </div>
        <hr />
        <div className={styles['characters-container']}>
          <h2 className={styles['characters-title']}>Characters</h2>
          {episode.characters.length === 0 ?
            <span className={styles['no-characters']}><BsDashCircleFill />There are not characters in this episode</span> :
            <Suspense fallback={<CardListSkeleton />}>
              <CharacterList charactersUrls={episode.characters} />
            </Suspense>
          }
        </div>
      </div>
    </main>
  );
}