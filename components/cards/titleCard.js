import styles from "./titleCard.module.css";
import Image from "next/image";
import HoverCard from "./hoverCard";

function TitleCard({ title, subtitle, one, two,  }) {
  return (
    <div className={styles.title_card_container}>
      <div className={styles.title_card_title}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className={styles.inner}>
        <HoverCard one={one} two={two} />
      </div>
    </div>
  );
}

export default TitleCard;
