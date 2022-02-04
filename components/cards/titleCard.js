import styles from "./titleCard.module.css";
import Image from "next/image";
import HoverCard from "./hoverCard";

function TitleCard({ title, subtitle, one, two, theme }) {
  return (
    <div className={styles.title_card_container}>
      <div className={styles.title_card_title}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <div className={styles.inner}>
        <HoverCard one={one} two={two} theme={theme} />
      </div>
    </div>
  );
}

export default TitleCard;
