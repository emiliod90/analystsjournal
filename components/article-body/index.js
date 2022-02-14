import styles from "./articleBody.module.css";

export default function ArticleBody({ content }) {
    return (
        <article className={styles.article} dangerouslySetInnerHTML={{ __html: content }} >
        </article>)
}