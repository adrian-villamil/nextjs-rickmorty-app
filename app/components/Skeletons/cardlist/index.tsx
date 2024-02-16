import styles from './cardlist.module.css';

export function CardListSkeleton() {
  return (
    <div className={styles['residents-list']}>
      {Array.from(Array(6).keys()).map((element) => (
        <div key={element} className={styles['resident-card']}>
          <div className={styles['resident-image']}></div>
          <div className={styles['resident-info']}>
            <div className={styles['resident-name']}></div>
            <span className={styles['resident-status']}>
              Status: <div></div>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}