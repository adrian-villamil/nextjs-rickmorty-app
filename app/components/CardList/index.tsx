import { Character } from "@/app/types/api-types";
import CardItem from "../CardItem";
import styles from './cardlist.module.css';

export default function CardList({
  characters
}: {
  characters: Character[]
}) {
  return (
    <div className={styles.container}>
      {characters.map((character) => (
        <CardItem key={character.id} character={character} />
      ))}
    </div>
  );
}