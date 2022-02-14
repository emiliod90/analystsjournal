import styles from "./articleBody.module.css";

export default function ArticleBody({ content, title, date }) {
    return (
        <article className={styles.article}>
            <h1>{title}</h1>
            <p>{date}</p>
            <div className={styles.article_body} dangerouslySetInnerHTML={{ __html: content }}></div>
        </article>)
}