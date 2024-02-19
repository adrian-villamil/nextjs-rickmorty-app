import { ApiResponse, Character } from "../types/api-types";
import { RICK_AND_MORTY_API_URL } from '@/config';

export async function getAllCharacters(currentPage: string): Promise<ApiResponse<Character[]>> {
  const response = await fetch(`${RICK_AND_MORTY_API_URL}/character/?page=${currentPage}`);

  if (!response.ok) {
    throw new Error('Failed to fetch all characters.');
  }

  return response.json();
}

export async function getCharacterById(characterId: string): Promise<Character> {
  const response = await fetch(`${RICK_AND_MORTY_API_URL}/character/${characterId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch the character with id ${characterId}.`);
  }

  return response.json();
}

export async function getCharactersFromUrls(charactersUrls: string[]): Promise<Character[]> {
  const characters = charactersUrls.map(async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch list of characters.');
    }

    return response.json();
  });

  return Promise.all(characters);
}