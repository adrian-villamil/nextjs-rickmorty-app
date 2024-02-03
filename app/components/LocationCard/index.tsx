import Image from 'next/image';
import Link from 'next/link';
import { Location } from '@/app/types/api-types';
import { creepster } from '@/app/fonts';
import styles from './locationcard.module.css';

export default function LocationCard({
  location,
}: {
  location: Location
}) {
  return (
    <div className={styles['card-container']}>
      <Image
        src={'/images/default-location-image.jpg'}
        alt={location.name}
        width={300}
        height={300}
        priority
        className={styles['card-image']}
      />
      <div className={styles['card-content']}>
        <Link
          href={`/characters/character-info/${location.id}`}
          className={`${styles['card-link']} ${creepster.className}`}
        >
          {location.name}
        </Link>
        <div className={styles['card-info']}>
          <div>
            <span>Dimension:</span>
            <span className={`${styles.dimension} ${styles[location.dimension]}`}>
              {location.dimension}
            </span>
          </div>
          <div>
            <span>Type:</span>
            <span className={`${styles.status} ${styles[location.type]}`}>
              {location.type}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}