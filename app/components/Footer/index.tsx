import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        {'All intellectual property rights associated with the Rick and Morty universe belong to '}
        <Link
          href={'https://www.adultswim.com/'}
          target='_blank'
          className={styles['link']}
        >
          Adult Swim
        </Link>
      </p>
      <p>
        {'This app utilizes data from '}
        <Link
          href={'https://rickandmortyapi.com/'}
          target='_blank'
          className={styles['link']}
        >
          The Rick and Morty API
        </Link>
      </p>
      <p>
        {'Created by '}
        <Link
          href={'https://github.com/adrian-villamil'}
          target='_blank'
          className={styles['link']}
        >
          adrian-villamil
        </Link>
      </p>
    </footer>
  );
}