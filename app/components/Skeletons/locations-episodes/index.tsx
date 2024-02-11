import styles from './skeletons.module.css';

export function CardSkeleton() {
  return (
    <div className={styles['card-container']}>
      <div className={styles['card-header']}>
        <div className={styles['card-icon']}></div>
        <div className={styles['card-title']}></div>
      </div>
      <div className={styles['card-info']}>
        <div></div>
        <div></div>
      </div>
      <div className={styles['card-info']}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}