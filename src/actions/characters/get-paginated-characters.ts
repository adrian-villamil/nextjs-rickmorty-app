'use server';

import { ApiResponse } from "@/interfaces/api.interface";
import { Character } from "@/interfaces/character.interface";
import { RICK_AND_MORTY_API_BASE_URL as baseUrl } from "@/utils/constants";

export const getPaginatedCharacters = async (page: string, name: string, gender: string, status: string): Promise<ApiResponse<Character>> => {
  const response = await fetch(`${baseUrl}/character?page=${page}&name=${name}&gender=${gender}&status=${status}`);

  if (!response.ok) {
    return {
      info: {
        count: 0,
        pages: 0,
        next: null,
        prev: null,
      },
      results: [],
    };
  }

  return response.json();
};