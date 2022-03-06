import styles from "./layout.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import Link from "next/link";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className={styles.header}>
      <div
        className={styles.header_inner}
        // style={{ background: theme.background.shadeThree }}
      >
        <div className={styles.header_brand}>
          <p
          // style={{ color: theme.background.shadeFour }}
          >
            <Link href="/">
              <a>
                <span style={{ fontSize: "0.9rem" }}>The</span> Analysts Journal
              </a>
            </Link>
          </p>
        </div>
        <ul className={styles.header_links}>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/templates">
              <a>Templates</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
        <div style={{ display: "inline-flex" }}>
          <div className={styles.header_circle} onClick={() => toggleTheme()}>
            {theme.title === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height={30}
                width={30}
              >
                <title>Moon</title>
                <path
                  fill={theme.text.p}
                  d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38 32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85-28.42 12.38-61.8 17.23-94.77 17.23-128.47 0-232.61-104.14-232.61-232.61z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height={30}
                width={30}
              >
                <title>Sunny</title>
                <path
                  d="M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zM256 486a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zM369.14 164.86a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zM96 278H48a22 22 0 010-44h48a22 22 0 010 44zM403.08 425.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z"
                  fill="#ffe082"
                />
              </svg>
            )}
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
                fill={theme.text.p}
                d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-50.22 116.82C218.45 151.39 236.28 144 256 144s37.39 7.44 50.11 20.94c12.89 13.68 19.16 32.06 17.68 51.82C320.83 256 290.43 288 256 288s-64.89-32-67.79-71.25c-1.47-19.92 4.79-38.36 17.57-51.93zM256 432a175.49 175.49 0 01-126-53.22 122.91 122.91 0 0135.14-33.44C190.63 329 222.89 320 256 320s65.37 9 90.83 25.34A122.87 122.87 0 01382 378.78 175.45 175.45 0 01256 432z"
              />
            </svg>
          </div>
          <div className={styles.header_menu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height={30}
              width={30}
            >
              <title>Menu</title>
              <path
                fill="none"
                stroke={theme.text.p}
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={48}
                d="M88 152h336M88 256h336M88 360h336"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
