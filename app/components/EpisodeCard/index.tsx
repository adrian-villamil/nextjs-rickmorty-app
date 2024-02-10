import Link from "next/link";
import { Episode } from "@/app/types/api-types";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import styles from './episodecard.module.css';

export default function EpisodeCard({
  episode,
}: {
  episode: Episode,
}) {
  return (
    <div className={styles['card-container']}>
      <div className={styles['card-header']}>
        <div className={styles['card-icon']}>
          <PiTelevisionSimpleBold />
        </div>
        <Link
          href={`/locations/${episode.id}`}
          className={styles['card-title']}
        >
          {episode.name}
        </Link>
      </div>
      <div className={styles['card-info']}>
        <span>Episode</span>
        <span>{episode.episode}</span>
      </div>
      <div className={styles['card-info']}>
        <span>Air date</span>
        <span>{episode.air_date}</span>
      </div>
    </div>
  );
}