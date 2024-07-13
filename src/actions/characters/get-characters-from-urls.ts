'use server';

import { Character } from "@/interfaces/character.interface";

export const getCharactersFromUrls = (urls: string[]) => {
  const charactersPromises: Promise<Character>[] = urls.map(async (url) => ((await fetch(url)).json()));

  return Promise.all(charactersPromises);
};