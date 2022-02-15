import styles from "./articleBody.module.css";

export default function ArticleBody({ content, title, date, author }) {
  return (
    <article className={styles.article}>
      <div className={styles.article_cover}>
        <h1>{title}</h1>
        <p>{author}</p>
        <p>{date}</p>
      </div>
      <div
        className={styles.article_body}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </article>
  );
}
