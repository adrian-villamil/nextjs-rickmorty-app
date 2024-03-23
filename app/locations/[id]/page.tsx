import { Suspense } from "react";
import { getLocationById } from "@/app/api/locations";
import { BsDashCircleFill } from "react-icons/bs";
import CharacterList from "@/app/components/CharacterList";
import { CardListSkeleton } from "@/app/components/Skeletons/cardlist";
import { ApiResponse, Location } from "@/app/types/api-types";
import { RICK_AND_MORTY_API_URL } from "@/config";
import styles from './location.module.css';

export async function generateStaticParams() {
  const data: ApiResponse<Location[]> = await fetch(`${RICK_AND_MORTY_API_URL}/location`).then((res) => res.json());
  const staticLocations = Array.from({ length: data.info.count }).map((v, i) => `${i + 1}`);

  return staticLocations.map((id) => ({
    id,
  }));
}

export default async function Page({
  params,
}: {
  params: { id: string }
}) {
  const locationId = params.id;
  const location = await getLocationById(locationId);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles['location-container']}>
          <h1 className={styles['location-name']}>{location.name}</h1>
          <div className={styles['location-info']}>
            <span>Tipe:</span>
            <span>
              {location.type}
            </span>
            <span>Dimension:</span>
            <span>
              {location.dimension}
            </span>
            <span>Created:</span>
            <span>
              {new Date(location.created).toLocaleString()}
            </span>
          </div>
        </div>
        <hr />
        <div className={styles['residents-container']}>
          <h2 className={styles['residents-title']}>Residents</h2>
          {location.residents.length === 0 ?
            <span className={styles['no-residents']}><BsDashCircleFill />There are not residents in this location</span> :
            <Suspense fallback={<CardListSkeleton />}>
              <CharacterList charactersUrls={location.residents} />
            </Suspense>
          }
        </div>
      </div>
    </main>
  );
}