import { Location } from '@/app/types/api-types';
import { FaLocationDot } from "react-icons/fa6";
import styles from './locationcard.module.css';
import Link from 'next/link';

export default function LocationCard({
  location,
}: {
  location: Location
}) {
  return (
    <div className={styles['card-container']}>
      <div className={styles['card-header']}>
        <div className={styles['card-icon']}>
          <FaLocationDot />
        </div>
        <Link
          href={`/locations/${location.id}`}
          className={styles['card-title']}
        >
          {location.name}
        </Link>
      </div>
      <div className={styles['card-info']}>
        <span>Type</span>
        <span>{location.type}</span>
      </div>
      <div className={styles['card-info']}>
        <span>Dimension</span>
        <span>{location.dimension}</span>
      </div>
    </div>
  );
}