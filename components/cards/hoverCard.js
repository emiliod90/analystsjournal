import styles from "./hoverCard.module.css";
import Image from "next/image";

function HoverCard({ one, two, theme }) {
  return (
    <div className={styles.card_container}>
      {one ? (
        <img
          src={one}
          alt="Picture of the author"
          width={225}
          height={300}
          className={styles.image_one}
        />
      ) : (
        <div
          style={{ backgroundColor: "lightgreen" }}
          className={styles.card_one}
        ></div>
      )}
      {two ? (
        <img
          src={two}
          alt="Picture of the author"
          width={225}
          height={300}
          className={styles.image_two}
        />
      ) : (
        <div
          style={{ backgroundColor: "lightblue" }}
          className={styles.card_two}
        ></div>
      )}
    </div>
  );
}

export default HoverCard;
