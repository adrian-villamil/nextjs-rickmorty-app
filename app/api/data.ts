const BASE_URL = 'https://rickandmortyapi.com/api';

export async function getCharacters(currentPage: string) {
  const res = await fetch(`${BASE_URL}/character/?page=${currentPage}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data.');
  }

  return res.json();
}