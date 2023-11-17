import Image from "next/image";
import Link from "next/link";
import { Character } from "@/app/types/api-types";
import { FaHeart, FaSkull, FaQuestionCircle } from "react-icons/fa";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { FaGenderless } from "react-icons/fa6";
import styles from './carditem.module.css';

const status: Record<Character['status'], JSX.Element> = {
  Alive: <FaHeart />,
  Dead: <FaSkull />,
  unknown: <FaQuestionCircle />,
};

const gender: Record<Character['gender'], JSX.Element> = {
  Female: <IoMdFemale />,
  Male: <IoMdMale />,
  Genderless: <FaGenderless />,
  unknown: <FaQuestionCircle />,
};

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
        className={styles['card-image']}
      />
      <div className={styles['card-content']}>
        <Link
          href={'/characters/character/'}
          className={styles['card-link']}
        >
          {character.name}
        </Link>
        <div className={styles['card-info']}>
          <div>
            <span>Gender:</span>
            <span className={`${styles.gender} ${styles[character.gender]}`}>
              {gender[character.gender]}
              {character.gender}
            </span>
          </div>
          <div>
            <span>Status:</span>
            <span className={`${styles.status} ${styles[character.status]}`}>
              {status[character.status]}
              {character.status}
            </span>
          </div>
          {/* <span
            className={`${styles.gender} ${styles[character.gender]}`}
          >
            {gender[character.gender]}
            {character.gender}
          </span>
          <span
            className={`${styles.status} ${styles[character.status]}`}
          >
            {status[character.status]}
            {character.status}
          </span> */}
        </div>
      </div>
    </div>
  );
}