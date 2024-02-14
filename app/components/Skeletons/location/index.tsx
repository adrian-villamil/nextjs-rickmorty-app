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
      </div>
      </div>
    </main >
  );
}