'use server';

import { Character } from "@/interfaces/character.interface";
import { RICK_AND_MORTY_API_BASE_URL as baseUrl } from "@/utils/constants";

export const getCharacterById = async (id: string): Promise<Character | null> => {
  const response = await fetch(`${baseUrl}/character/${id}`);

  if (!response.ok) return null;

  return response.json();
};