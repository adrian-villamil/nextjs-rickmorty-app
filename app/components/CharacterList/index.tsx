import Image from 'next/image';
import Link from 'next/link';
import { getCharactersFromUrls } from '@/app/api/characters';
import styles from './characterlist.module.css';

export default async function CharacterList({
  charactersUrls,
}: {
  charactersUrls: string[],
}) {
  const characters = await getCharactersFromUrls(charactersUrls);

  return (
    <div className={styles['characters-list']}>
      {characters.map((character) => (
        <div key={character.id} className={styles['character-card']}>
          <Image
            src={character.image}
            alt={character.name}
            width={300}
            height={300}
            priority
            className={styles['character-image']}
          />
          <div className={styles['character-info']}>
            <Link
              href={`/characters/${character.id}`}
              className={styles['character-name']}
            >
              {character.name}
            </Link>
            <span className={styles['character-status']}>
              Status: {character.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}