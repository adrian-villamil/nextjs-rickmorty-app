import { CardItemSkeleton } from '../../components/Skeletons/characters';
import { creepster } from '../../fonts';
import styles from './characters.module.css';

export default function Loading() {
  return (
    <main className={styles.main}>
      <h1 className={creepster.className}>Characters</h1>
      <div className={styles.list}>
        {Array.from(Array(20).keys()).map((element) => (
          <CardItemSkeleton key={element} />
        ))}
      </div>
    </main>
  );
}