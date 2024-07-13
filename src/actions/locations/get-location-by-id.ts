'use server';

import { Location } from "@/interfaces/location.interface";
import { RICK_AND_MORTY_API_BASE_URL as baseUrl } from "@/utils/constants";

export const getLocationById = async (id: string): Promise<Location | null> => {
  const response = await fetch(`${baseUrl}/location/${id}`);

  if (!response.ok) return null;

  return response.json();
};