import { Metadata } from 'next';
import { getAllCharacters } from '../api/characters';
import { creepster } from '../fonts';
import Pagination from '../components/Pagination';
import styles from './characters.module.css';
import CharacterCard from '../components/CharacterCard';

export const metadata: Metadata = {
  title: 'Characters',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  }
}) {
  const currentPage = searchParams?.page || '1';
  const { info, results } = await getAllCharacters(currentPage);

  return (
    <main className={styles.main}>
      <h1 className={creepster.className}>Characters</h1>
      <div className={styles.list}>
        {results.map((character) => (
          <CharacterCard
            key={character.id}
            character={character} />
        ))}
      </div>
      <Pagination
        pages={info.pages}
        currentPage={Number(currentPage) - 1}
      />
    </main>
  );
}