'use server';

import { ApiResponse } from "@/interfaces/api.interface";
import { Episode } from "@/interfaces/episode.interface";
import { RICK_AND_MORTY_API_BASE_URL as baseUrl } from "@/utils/constants";

export const getPaginatedEpisodes = async (page: string, name: string): Promise<ApiResponse<Episode>> => {
  const response = await fetch(`${baseUrl}/episode?page=${page}&name=${name}`);

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