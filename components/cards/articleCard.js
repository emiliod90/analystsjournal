import Link from "next/link";
import styles from "./articleCard.module.css";

export default function ArticleCard({page, title, date}) {
  return (
    <Link href={`blog/${page}`}>
      <a className={styles.card}>
        <h3>{title}</h3>
        <p>{date}</p>
      </a>
    </Link>
  );
}
