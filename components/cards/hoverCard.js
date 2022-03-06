import styles from "./hoverCard.module.css";
import { motion } from "framer-motion";

function HoverCard({ one, two }) {
  return (
    <motion.div
      className={styles.card_container}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={({ duration: 0.8 }, 0.1)}
    >
      {one ? (
        <img
          src={one}
          alt={one}
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
          alt={two}
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
    </motion.div>
  );
}

export default HoverCard;
