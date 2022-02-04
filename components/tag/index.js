import styles from "./tag.module.css";

function Tag({ children, title, background, color }) {
  return (
    <div className={styles.tag}>
      <div className={styles.circle_tag} style={{ background: background }}>
        {children}
      </div>
      <span style={{color: color}}>{title}</span>
    </div>
  );
}

export default Tag;