import Image from "next/image";
import Link from "next/link";
import { Character } from "@/app/types/api-types";
import styles from './carditem.module.css';

export default function CardItem({
  character,
}: {
  character: Character
}) {
  return (
    <div className={styles['card-container']}>
      <Image
        src={character.image}
        alt={character.name}
        width={300}
        height={300}
        priority
        className={styles.image}
      />
      <div className={styles['card-content']}>
        <Link href={'/characters/character/'} className={styles.link}>
          {character.name}
        </Link>
        <div className={styles['card-info']}>
          <span>{character.species}</span>
          <span>{character.status}</span>
        </div>
      </div>
    </div>
  );
}