import { ApiResponse, Location } from "../types/api-types";
import { RICK_AND_MORTY_API_URL } from "@/config";

export async function getAllLocations(currentPage: string): Promise<ApiResponse<Location[]>> {
  const response = await fetch(`${RICK_AND_MORTY_API_URL}/location?page=${currentPage}`);

  if (!response.ok) {
    throw new Error('Failed to fetch all locations.');
  }

  return response.json();
}

export async function getLocationById(locationId: string): Promise<Location> {
  const response = await fetch(`${RICK_AND_MORTY_API_URL}/location/${locationId}.`);

  if (!response.ok) {
    throw new Error(`Failed to fetch the location with id ${locationId}`);
  }

  return response.json();
}