import { ApiResponse, Character } from "../types/api-types";
import { RICK_AND_MORTY_API_URL } from '../../config';

export async function getAllCharacters(currentPage: string): Promise<ApiResponse<Character[]>> {
  const response = await fetch(`${RICK_AND_MORTY_API_URL}/character/?page=${currentPage}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data.');
  }

  return response.json();
}

export async function getCharacterById(characterId: string): Promise<Character> {
  const response = await fetch(`${RICK_AND_MORTY_API_URL}/character/${characterId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data.');
  }

  return response.json();
}