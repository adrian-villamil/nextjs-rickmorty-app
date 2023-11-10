import { Metadata } from 'next';
import { getCharacters } from '../api/data';
import { CharacterResponse } from '@/app/types/api-types';
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
  const { info, results } = await getCharacters(currentPage) as CharacterResponse;

  return (
    <main className={styles.main}>
      <h1>Characters Page</h1>
      <CardList characters={results} />
      <Pagination pages={info.pages} />
    </main>
  );
}