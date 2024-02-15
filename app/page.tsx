import Image from "next/image";
import Link from "next/link";
import characterIntroImg from '@/public/images/character-intro-img.png';
import locationIntroImg from '@/public/images/location-intro-img.png';
import episodeIntroImg from '@/public/images/episode-intro-img.jpg';
import { creepster } from "./fonts";
import styles from './homepage.module.css';

const intros = [
  {
    id: 1,
    title: 'Buckle Up, Mortys!',
    text: `
      Dive into the Wubba Lubba Dub Dub of the multiverse's craziest crew. 
      Meet the mad scientist, the awkward teenager, and the bizarre cast 
      of characters that make every dimension unique.
    `,
    image: {
      src: characterIntroImg,
      alt: 'character_intro_img',
      width: 640,
      height: 360,
    },
    pathname: '/characters',
    section: 'Characters',
  },
  {
    id: 2,
    title: 'Beyond Earth (C-137)',
    text: `
      Explore the wondrous and weird realms of the Rick and Morty multiverse. 
      From the Citadel of Ricks to the Microverse, each dimension offers a new adventure. 
      Get ready to travel through time, space, and the minds of the creators of the universe.
    `,
    image: {
      src: locationIntroImg,
      alt: 'location_intro_img',
      width: 640,
      height: 360,
    },
    pathname: '/locations',
    section: 'Locations',
  },
  {
    id: 3,
    title: 'Interdimensional Mayhem',
    text: `
      Relive the most memorable Rick and Morty episodes. 
      Whether you're a fan of the Council of Ricks or the Vindicators, 
      there's a world out there waiting to be discovered.
    `,
    image: {
      src: episodeIntroImg,
      alt: 'episode_intro_img',
      width: 640,
      height: 360,
    },
    pathname: '/episodes',
    section: 'Episodes',
  }
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles['title-container']}>
        <div>
          <h1 className={`${styles['home-title']} ${creepster.className}`}>Rick And Morty</h1>
          <p className={styles['home-subtitle']}>The official guie de to multiverse's craziest adventures</p>
        </div>
      </div>
      <div className={styles['intro-list']}>
        {intros.map((intro) => (
          <section key={intro.id} className={`${styles['intro-container']} ${intro.id % 2 === 0 ? styles['intro-reverse'] : ''}`}>
            <div className={styles['intro-info']}>
              <h1 className={styles['intro-title']}>{intro.title}</h1>
              <p className={styles['intro-text']}>{intro.text}</p>
              <Link href={intro.pathname} className={styles['intro-link']}>
                {'View '}
                {intro.section}
              </Link>
            </div>
            <Image
              src={intro.image.src}
              alt={intro.image.alt}
              width={intro.image.width}
              height={intro.image.height}
              priority
              className={styles['intro-image']}
            />
          </section>
        ))}
      </div>
    </main>
  )
}
