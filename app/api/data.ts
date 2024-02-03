const BASE_URL = 'https://rickandmortyapi.com/api';

export async function getAllCharacters(currentPage: string) {
  const res = await fetch(`${BASE_URL}/character/?page=${currentPage}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data.');
  }

  return res.json();
}

export async function getCharacterById(characterId: string) {
  const res = await fetch(`${BASE_URL}/character/${characterId}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data.');
  }

  return res.json();
}

export async function getAllLocations(currentPage: string) {
  const res = await fetch(`${BASE_URL}/location?page=${currentPage}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data.');
  }

  return res.json();
}