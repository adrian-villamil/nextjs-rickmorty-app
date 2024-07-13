'use server';

import { Episode } from "@/interfaces/episode.interface";
import { getEpisodeById } from "./get-episode-by-id";

export const getEpisodesFromUrls = async (urls: string[]) => {
  const episodesPromises:Promise<Episode>[] = urls.map(async (url) => (await fetch(url)).json());
  
  return Promise.all(episodesPromises);
};