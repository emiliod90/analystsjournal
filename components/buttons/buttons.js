import styles from "./buttons.module.css";

function PrimaryBtn({ children }) {
  return (
    <div
      className={styles.button}
      style={{
        background: "linear-gradient(45deg, #fe6b8b, #ff8e53)",
        color: "#fff",
      }}
    >
      {children}
    </div>
  );
}

function SecondaryBtn({ children }) {
  return (
    <div
      className={styles.button}
      style={{
        background: "linear-gradient(45deg, #2196f3, #21cbf3)",
        color: "#fff",
      }}
    >
      {children}
    </div>
  );
}

function TertiaryBtn({ children }) {
  return (
    <div
      className={styles.button}
      style={{
        background: "transparent",
        border: "1px solid #03BFCB",
        color: "#02899C",
      }}
    >
      {children}
    </div>
  );
}

function SmallBtn({ children, background, color }) {
  return <div className={styles.small_button} style={{background : background ? background : '#e0e0e0', color: color ? color : '#404040'}}>{children}</div>;
}

export { PrimaryBtn, SecondaryBtn, TertiaryBtn, SmallBtn };
