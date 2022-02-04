import styles from "../../styles/layout.module.css";
import Image from "next/image";
import profilePic from "../../public/people.svg";
import CogPic from "../../public/cog.svg";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer
      className={styles.footer}
      style={{ background: theme.background.shadeTwo }}
    >
      <div
        className={styles.footer_inner}
        style={{ background: theme.navBackground }}
      >
        <p style={{ padding: "0 10px" }}>🚀</p>
        <p style={{ padding: "0 10px" }}>About</p>
        <p style={{ padding: "0 10px" }}>Contact</p>
      </div>
    </footer>
  );
}
