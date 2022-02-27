import Link from "next/link";
import styles from "./articleList.module.css";

export default function ArticleList({ page, title, date, image }) {
  return (
    <article className={styles.article}>
      <Link href={`blog/${page}`}>
        <a className={styles.card}>
          <div className={styles.card_description}>
            <p className={styles.card_title}>{title}</p>
            <p>{date}</p>
          </div>
        </a>
      </Link>
    </article>
  );
}
