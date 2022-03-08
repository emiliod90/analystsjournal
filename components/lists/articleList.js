import Link from "next/link";
import styles from "./articleList.module.css";

export default function ArticleList({ page, title, date, tags }) {
  const dateObject = new Date(date);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [day, month, year] = [
    dateObject.getDate(),
    months[dateObject.getMonth()],
    dateObject.getFullYear(),
  ];

  return (
    <article className={styles.article}>
      <Link href={`/blog/${page}`}>
        <a className={styles.card}>
          <div className={styles.card_description}>
            <p className={styles.card_title}>{title}</p>
            <div className={styles.card_subtext}>
              <div className={styles.tags}>
                <p>{tags.topic}</p>
              </div>
              <p>
                {day} {month} {year}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </article>
  );
}
