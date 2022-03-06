import styles from "./hero.module.css";
import HoverCard from "../cards/hoverCard";
import TitleCard from "../cards/titleCard";

export default function Hero({title, one, two, three, four, five, six}) {
  return (
    <div className={styles.hero}>
      <div className={styles.cover}>
        <div className={styles.box_one}>
          <HoverCard
            one={
              one
            }
            two={
                two
            }
          />
        </div>
        <TitleCard
          title={title}
          one={
            five
          }
          two={
            six
          }
        />
        <div className={styles.box_two}>
          <HoverCard
            one={
              three
            }
            two={
                four
            }
          />
        </div>
      </div>
    </div>
  );
}
