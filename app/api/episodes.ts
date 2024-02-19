import { ApiResponse, Episode } from "../types/api-types";
import { RICK_AND_MORTY_API_URL } from "@/config";

export async function getAllEpisodes(currentPage: string): Promise<ApiResponse<Episode[]>> {
  const response = await fetch(`${RICK_AND_MORTY_API_URL}/episode?page=${currentPage}`);

  if (!response.ok) {
    throw new Error('Failed to fetch all episodes.');
  }

  return response.json();
}

export async function getEpisodeById(episodeId: string): Promise<Episode> {
  const response = await fetch(`${RICK_AND_MORTY_API_URL}/episode/${episodeId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch the episode with id ${episodeId}.`);
  }

  return response.json();
}

export async function getEpisodesFromUrls(episodesUrls: string[]): Promise<Episode []> {
  const episodes = episodesUrls.map(async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to list of episodes.');
    }
    
    return response.json();
  })
  
  return Promise.all(episodes);
}