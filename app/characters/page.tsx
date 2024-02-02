import { Metadata } from 'next';
import { getAllCharacters } from '../api/data';
import { CharactersResponse } from '@/app/types/api-types';
import { creepster } from '../fonts';
import CardList from '../components/CardList';
import Pagination from '../components/Pagination';
import styles from './characters.module.css';

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
  const { info, results } = await getAllCharacters(currentPage) as CharactersResponse;

  return (
    <main className={styles.main}>
      <h1 className={creepster.className}>Characters</h1>
      <CardList characters={results} />
      <Pagination
        pages={info.pages}
        currentPage={Number(currentPage) - 1}
      />
    </main>
  );
}