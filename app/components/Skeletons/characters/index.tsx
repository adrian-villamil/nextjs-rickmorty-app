import { creepster } from '@/app/fonts';
import styles from './skeletons.module.css';

export function CardItemSkeleton() {
  return (
    <div className={styles['card-container']}>
      <div className={styles['card-image']}></div>
      <div className={styles['card-content']}>
        <div className={styles['card-link']}></div>
        <div className={styles['card-info']}>
          <div>
            <div className={styles['card-spans']}></div>
            <div className={styles['card-spans']}></div>
          </div>
          <div>
            <div className={styles['card-spans']}></div>
            <div className={styles['card-spans']}></div>
          </div>
        </div>
      </div>
    </div>
  );
}