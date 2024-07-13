'use server';

import { Episode } from "@/interfaces/episode.interface";
import { RICK_AND_MORTY_API_BASE_URL as baseUrl } from "@/utils/constants";

export const getEpisodeById = async (id: string): Promise<Episode | null> => {
  const response = await fetch(`${baseUrl}/episode/${id}`);

  if (!response.ok) return null;

  return response.json();
};