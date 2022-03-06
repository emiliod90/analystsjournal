import styles from "./layout.module.css";
import Image from "next/image";
import Link from "next/link";
import welcomeClip from "../../public/welcomeClip.png";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { PrimaryBtn } from "../buttons/buttons";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_card_inner}>
        <div className={styles.footer_grid}>
          <Link href={"/"}>
            <a>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "left",
                }}
              >
                <Image src={welcomeClip} width={100} height={100} />

                <h2 style={{ display: "inline", marginLeft: "10px" }}>
                  The Analysts <br />
                  Journal
                </h2>
              </div>{" "}
            </a>
          </Link>
          <div style={{ width: "160px" }}>
            <PrimaryBtn>Get in touch &rarr;</PrimaryBtn>
          </div>
        </div>

        <ul>
          <li className={styles.footer_links}>
            <Link href={"/about"}>
              <a>About</a>
            </Link>
          </li>
          <li className={styles.footer_links}>
            <Link href={"/blog"}>
              <a>Blog</a>
            </Link>
          </li>
          <li className={styles.footer_links}>
            <Link href={"/templates"}>
              <a>Templates</a>
            </Link>
          </li>
          <li className={styles.footer_links}>
            <Link href={"/projects"}>
              <a>Projects</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.gutter}>
        Analysts Journal ©. All Rights Reserved.
      </div>
    </footer>
  );
}
