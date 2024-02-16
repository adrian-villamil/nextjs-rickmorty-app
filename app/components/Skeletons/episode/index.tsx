import styles from './episode.module.css';

export function EpisodeSkeleton() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles['episode-container']}>
          <div className={styles['episode-name']}></div>
          <div className={styles['episode-info']}>
            <span>Episode:</span>
            <div></div>
            <span>Air date:</span>
            <div></div>
            <span>Created:</span>
            <div></div>
          </div>
        </div>
        <hr />
        <div className={styles['characters-container']}>
          <h2 className={styles['characters-title']}>Characters</h2>
        </div>
      </div>
    </main >
  );
}