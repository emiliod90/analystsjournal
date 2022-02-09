import styles from "./layout.module.css";
import Image from "next/image";
import profilePic from "../../public/people.svg";
import CogPic from "../../public/cog.svg";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className={styles.header}>
      <div
        className={styles.header_inner}
        style={{ background: theme.background.shadeThree }}
      >
        <div className={styles.header_brand}>
          <p style={{ color: theme.background.shadeFour }}>
            🚀 Analysts Journal
          </p>
        </div>
        <div style={{ display: "inline-flex" }}>
          <div className={styles.header_circle} onClick={() => toggleTheme()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height={30}
              width={30}
            >
              <title>Moon</title>
              <path
                fill="#ffe082"
                d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38 32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85-28.42 12.38-61.8 17.23-94.77 17.23-128.47 0-232.61-104.14-232.61-232.61z"
              />
            </svg>
          </div>
          <div className={styles.header_circle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height={30}
              width={30}
            >
              <title>Avatar</title>
              <path
                fill={theme.background.shadeFour}
                d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-50.22 116.82C218.45 151.39 236.28 144 256 144s37.39 7.44 50.11 20.94c12.89 13.68 19.16 32.06 17.68 51.82C320.83 256 290.43 288 256 288s-64.89-32-67.79-71.25c-1.47-19.92 4.79-38.36 17.57-51.93zM256 432a175.49 175.49 0 01-126-53.22 122.91 122.91 0 0135.14-33.44C190.63 329 222.89 320 256 320s65.37 9 90.83 25.34A122.87 122.87 0 01382 378.78 175.45 175.45 0 01256 432z"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
