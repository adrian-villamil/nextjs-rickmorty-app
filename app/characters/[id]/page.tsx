import Image from "next/image";
import Link from "next/link";
import { getCharacterById } from "@/app/api/characters";
import { getEpisodesFromUrls } from "@/app/api/episodes";
import { IoPlayOutline } from "react-icons/io5";
import styles from './character.module.css';

export default async function Page({
  params
}: {
  params: { id: string }
}) {
  const characterId = params.id;
  const character = await getCharacterById(characterId);
  const episodes = await getEpisodesFromUrls(character.episode);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles['row-1']}>
          <Image
            src={character.image}
            alt={character.name}
            width={300}
            height={300}
            priority
            className={styles.image}
          />
          <div className={styles['info']}>
            <h1>{character.name}</h1>
            <div className={styles['info-container']}>
              <div>
                <span>Status</span>
                <span>{character.status}</span>
              </div>
              <div>
                <span>Species</span>
                <span>{character.species}</span>
              </div>
              <div>
                <span>Type</span>
                <span>{character.type}</span>
              </div>
              <div>
                <span>Gender</span>
                <span>{character.gender}</span>
              </div>
              <div>
                <span>Origin</span>
                <span>{character.origin.name}</span>
              </div>
              <div>
                <span>Location</span>
                <span>{character.location.name}</span>
              </div>
              <div>
                <span>Created</span>
                <span>{new Date(character.created).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles['row-2']}>
          <h3>Episodes</h3>
          <div className={styles['episodes-list']}>
            {episodes.map((episode) => (
              <div key={episode.id} className={styles['episode-item']}>
                <div className={styles['episode-icon']}>
                  <IoPlayOutline />
                </div>
                <div>
                  <Link
                    href={`/episodes/${episode.id}`}
                    className={styles['episode-link']}
                  >
                    {episode.episode} - {episode.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}