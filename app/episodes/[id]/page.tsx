import { getEpisodeById } from "@/app/api/episodes";

export default async function Page({
  params,
}: {
  params: { id: string }
}) {
  const episodeId = params.id;
  const episode = await getEpisodeById(episodeId);

  return (
    <main>
      <h1>{episode.name}</h1>
    </main>
  );
}