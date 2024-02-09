import Image from 'next/image';
import Link from 'next/link';
import { Location } from '@/app/types/api-types';
import { creepster } from '@/app/fonts';
import { IoPlanet } from "react-icons/io5";
import { FaQuestionCircle, FaUmbrellaBeach } from 'react-icons/fa';
import { GiGalaxy, GiNightSleep } from "react-icons/gi";
import { LiaLightbulb, LiaSatelliteSolid } from "react-icons/lia";
import { LuCircleDot } from 'react-icons/lu';
import { PiCastleTurretFill, PiCirclesThreeFill, PiGearFineBold, PiTelevisionSimpleBold } from "react-icons/pi";
import styles from './locationcard.module.css';

const type: Record<string, JSX.Element> = {
  ['Cluster']: <GiGalaxy />,
  ['Customs']: <PiGearFineBold />,
  ['Dimension']: <PiCirclesThreeFill />,
  ['Dream']: <GiNightSleep />,
  ['Fantasy town']: <PiCastleTurretFill />,
  ['Menagerie']: <LiaLightbulb />,
  ['Microverse']: <LuCircleDot />,
  ['Planet']: <IoPlanet />,
  ['Resort']: <FaUmbrellaBeach />,
  ['Space station']: <LiaSatelliteSolid />,
  ['TV']: <PiTelevisionSimpleBold />,
  ['unknown']: <FaQuestionCircle />,
};

export default function LocationCard({
  location,
}: {
  location: Location
}) {
  return (
    <div className={styles['card-container']}>
      <Image
        src={'/images/location-default.jpg'}
        alt={location.name}
        width={300}
        height={300}
        priority
        className={styles['card-image']}
      />
      <div className={styles['card-content']}>
        <Link
          href={`/characters/character-info/${location.id}`}
          className={`${styles['card-link']} ${creepster.className}`}
        >
          {location.name}
        </Link>
        <div className={styles['card-info']}>
          <div>
            <span>Type:</span>
            <span className={`${styles.type} ${styles[location.type]}`}>
              {type[location.type]}
              {location.type}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}