import styles from './skeletons.module.css';

export function CardSkeleton() {
  return (
    <div className={styles['card-container']}>
      <div className={styles['card-image']}></div>
      <div className={styles['card-content']}>
        <div className={styles['card-link']}></div>
        <div className={styles['card-info']}>
          <div className={styles['card-spans']}></div>
          <div className={styles['card-spans']}></div>
        </div>
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <div className={styles['cardlist-container']}>
      {Array.from(Array(20).keys()).map((element) => (
        <CardSkeleton key={element} />
      ))}
    </div>
  );
}

export function CharactersLoadingSkeleton() {
  return (
    <main className={styles.main}>
      <h1>Characters Page</h1>
      <CardsSkeleton />
    </main>
  );
}