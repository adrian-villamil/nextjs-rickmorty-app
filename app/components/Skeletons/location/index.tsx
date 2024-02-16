import styles from './location.module.css';

export function LocationSkeleton() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
      <div className={styles['location-container']}>
        <div className={styles['location-name']}></div>
        <div className={styles['location-info']}>
          <span>Tipe:</span>
          <div></div>
          <span>Dimension:</span>
          <div></div>
          <span>Created:</span>
          <div></div>
        </div>
      </div>
      <hr />
      <div className={styles['residents-container']}>
        <h2 className={styles['residents-title']}>Residents</h2>
      </div>
      </div>
    </main >
  );
}