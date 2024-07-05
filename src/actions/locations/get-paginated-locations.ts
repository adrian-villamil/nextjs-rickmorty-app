'use server';

import { ApiResponse } from "@/interfaces/api.interface";
import { Location } from "@/interfaces/location.interface";
import { RICK_AND_MORTY_API_BASE_URL as baseUrl } from "@/utils/constants";

export const getPaginatedLocations = async (page: string, name: string): Promise<ApiResponse<Location>> => {
  const response = await fetch(`${baseUrl}/location?page=${page}&name=${name}`);

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
}