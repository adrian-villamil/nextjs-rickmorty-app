import Image from "next/image";
import Link from "next/link";
import { getLocationById } from "@/app/api/locations";
import { getCharactersFromUrls } from "@/app/api/characters";
import styles from './location.module.css';

export default async function Page({
  params,
}: {
  params: { id: string }
}) {
  const locationId = params.id;
  const location = await getLocationById(locationId);
  const residents = await getCharactersFromUrls(location.residents);

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
          <div className={styles['residents-list']}>
            {residents.map((resident) => (
              <div key={resident.id} className={styles['resident-card']}>
                <Image
                  src={resident.image}
                  alt={resident.name}
                  width={300}
                  height={300}
                  priority
                  className={styles['resident-image']}
                />
                <div className={styles['resident-info']}>
                  <Link
                    href={`/characters/${resident.id}`}
                    className={styles['resident-name']}
                  >
                    {resident.name}
                  </Link>
                  <span className={styles['resident-status']}>
                    Status: {resident.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}