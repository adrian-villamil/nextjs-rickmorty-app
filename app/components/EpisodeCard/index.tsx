import Image from "next/image";
import Link from "next/link";
import { creepster } from "@/app/fonts";
import { Episode } from "@/app/types/api-types";
import styles from './episodecard.module.css';

export default function EpisodeCard({
  episode,
}: {
  episode: Episode,
}) {
  return (
    <div className={styles['card-container']}>
      <Image
        src={'/images/default-location-image.jpg'}
        alt={episode.name}
        width={300}
        height={300}
        priority
        className={styles['card-image']}
      />
      <div className={styles['card-content']}>
        <Link
          href={`/characters/character-info/${episode.id}`}
          className={`${styles['card-link']} ${creepster.className}`}
        >
          {episode.name}
        </Link>
        <div className={styles['card-info']}>
          <div>
            <span>Episode:</span>
            <span>
              {episode.episode}
            </span>
          </div>
          <div>
            <span>Air date:</span>
            <span>
              {episode.air_date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}