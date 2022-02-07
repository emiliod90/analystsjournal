import { motion } from "framer-motion";
import styles from "./section.module.css";

const Section = ({ children, amount = 0.5 }) => (
  <motion.section
  initial={{ y: 30, opacity: 0 }}
  transition={{ type: "spring", duration: 1 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: amount }}
  className={styles.section}
  >
    {children}
  </motion.section>
);

export default Section;