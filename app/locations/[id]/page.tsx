import { getLocationById } from "@/app/api/locations";

export default async function Page({
  params,
}: {
  params: { id: string }
}) {
  const locationId = params.id;
  const location = await getLocationById(locationId);

  return (
    <main>
      <h1>{location.name}</h1>
    </main>
  );
}