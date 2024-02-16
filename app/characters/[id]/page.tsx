import Image from "next/image";
import Link from "next/link";
import { getCharacterById } from "@/app/api/characters";
import { getEpisodesFromUrls } from "@/app/api/episodes";
import { FaGlobe } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { MdMonitorHeart } from "react-icons/md";
import { PiGenderIntersexBold } from "react-icons/pi";
import { PiTelevisionSimpleBold } from "react-icons/pi";
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
        <div className={styles['character-container']}>
          <Image
            src={character.image}
            alt={character.name}
            width={300}
            height={300}
            priority
            className={styles['character-image']}
          />
          <div>
            <h1 className={styles['character-name']}>{character.name}</h1>
            <div className={styles['info-container']}>
              <div className={styles['info-row']}>
                <span className={styles['info-attribute']}>
                  {<MdMonitorHeart />}
                  Status
                </span>
                <span>{character.status}</span>
              </div>
              <div className={styles['info-row']}>
                <span className={styles['info-attribute']}>
                  {<GiPlantsAndAnimals />}
                  Species
                </span>
                <span>{character.species}</span>
              </div>
              <div className={styles['info-row']}>
                <span className={styles['info-attribute']}>
                  {<FaTag />}
                  Type
                </span>
                <span>{character.type || '---'}</span>
              </div>
              <div className={styles['info-row']}>
                <span className={styles['info-attribute']}>
                  {<PiGenderIntersexBold />}
                  Gender
                </span>
                <span>{character.gender}</span>
              </div>
              <div className={styles['info-row']}>
                <span className={styles['info-attribute']}>
                  {<FaGlobe />}
                  Origin
                </span>
                {character.origin.name === 'unknown' ?
                  <span>{character.origin.name}</span> :
                  <Link
                    href={`/locations/${character.origin.url.slice(41)}`}
                    className={styles['info-link']}
                  >
                    {character.origin.name}
                  </Link>
                }
              </div>
              <div className={styles['info-row']}>
                <span className={styles['info-attribute']}>
                  {<FaMapMarkerAlt />}
                  Location
                </span>
                {character.location.name === 'unknown' ?
                  <span>{character.location.name}</span> :
                  <Link
                    href={`/locations/${character.location.url.slice(41)}`}
                    className={styles['info-link']}
                  >
                    {character.location.name}
                  </Link>
                }
              </div>
              <div className={styles['info-row']}>
                <span className={styles['info-attribute']}>
                  {<FaRegCalendarAlt />}
                  Created
                </span>
                <span>{new Date(character.created).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles['episodes-container']}>
          <h3 className={styles['episodes-title']}>Episodes</h3>
          <div className={styles['episodes-list']}>
            {episodes.map((episode) => (
              <div key={episode.id} className={styles['episode-item']}>
                <div className={styles['episode-icon']}>
                  <PiTelevisionSimpleBold />
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