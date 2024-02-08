import { ApiResponse, Character, Episode, Location } from "../types/api-types";

const BASE_URL = 'https://rickandmortyapi.com/api';

export async function getAllCharacters(currentPage: string): Promise<ApiResponse<Character[]>> {
  const response = await fetch(`${BASE_URL}/character/?page=${currentPage}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data.');
  }

  return response.json();
}

export async function getCharacterById(characterId: string): Promise<Character> {
  const response = await fetch(`${BASE_URL}/character/${characterId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data.');
  }

  return response.json();
}

export async function getAllLocations(currentPage: string): Promise<ApiResponse<Location[]>> {
  const response = await fetch(`${BASE_URL}/location?page=${currentPage}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data.');
  }

  return response.json();
}

export async function getAllEpisodes(currentPage: string): Promise<ApiResponse<Episode[]>> {
  const response = await fetch(`${BASE_URL}/episode?page=${currentPage}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data.');
  }

  return response.json();
}