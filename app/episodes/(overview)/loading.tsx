import { CardSkeleton } from '../../components/Skeletons/locations-episodes';
import { creepster } from '../../fonts';
import styles from './episodes.module.css';

export default function Loading() {
  return (
    <main className={styles.main}>
      <h1 className={creepster.className}>Episodes</h1>
      <div className={styles.list}>
      {Array.from(Array(20).keys()).map((element) => (
        <CardSkeleton key={element} />
      ))}
      </div>
    </main>
  );
}