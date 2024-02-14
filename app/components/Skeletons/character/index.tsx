import { FaGlobe } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { MdMonitorHeart } from "react-icons/md";
import { PiGenderIntersexBold } from "react-icons/pi";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import styles from './character.module.css';

export function CharacterSkeleton() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles['character-container']}>
          <div className={styles['character-image']}></div>
          <div>
            <div className={styles['character-name']}></div>
            <div className={styles['info-container']}>
              <div className={styles['info-row']}>
                <span className={styles['info-attribute']}>
                  {<MdMonitorHeart />}
                  Status
                </span>
                <div></div>
              </div>
              <div className={styles['info-row']}>
                <span className={styles['info-attribute']}>
                  {<GiPlantsAndAnimals />}
                  Species
                </span>
                <div></div>
              </div>
              <div className={styles['info-row']}>
                <span className={styles['info-attribute']}>
                  {<FaTag />}
                  Type
                </span>
                <div></div>
              </div>
              <div className={styles['info-row']}>
                <span className={styles['info-attribute']}>
                  {<PiGenderIntersexBold />}
                  Gender
                </span>
                <div></div>
              </div>
              <div className={styles['info-row']}>
                <span className={styles['info-attribute']}>
                  {<FaGlobe />}
                  Origin
                </span>
                <div></div>
              </div>
              <div className={styles['info-row']}>
                <span className={styles['info-attribute']}>
                  {<FaMapMarkerAlt />}
                  Location
                </span>
                <div></div>
              </div>
              <div className={styles['info-row']}>
                <span className={styles['info-attribute']}>
                  {<FaRegCalendarAlt />}
                  Created
                </span>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles['row-2']}>
          <h3 className={styles['episodes-title']}>Episodes</h3>
          <div className={styles['episodes-list']}>
            <div className={styles['episode-item']}>
              <div className={styles['episode-icon']}>
                <PiTelevisionSimpleBold />
              </div>
              <div>
                <div className={styles['episode-link']}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}