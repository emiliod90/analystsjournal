import Head from "next/head";
import Image from "next/image";
import { SmallBtn } from "../components/buttons/buttons";
import styles from "../styles/Home.module.css";
//https://codepen.io/andybarefoot/pen/wrXvLj
//https://www.w3schools.com/cssref/sel_selection.asp
// https://stackoverflow.com/questions/16094837/what-is-the-browser-default-background-color-when-selecting-text

export default function Home() {
  return (
    <div>
      <Head>
        <title>Analysts Journal</title>
        <meta name="description" content="Analysts Journal React app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.hero_card}>
        <div className={styles.grid_12}>
          <div className={styles.box_one}></div>
          <div className={styles.box_two}></div>
          <div className={styles.box_three}></div>
          <div className={styles.box_four}></div>
          <div className={styles.box_five}></div>
        </div>
        <div className={styles.box_six}>
          <div className={styles.title_text}>
            The Analysts
            <br />
            Journal
          </div>
        </div>
      </div>
      <div>
        <p className={styles.description}>
          A site for{" "}
          <code
            style={{ background: "rgba(51, 181, 229, 0.4)" }}
            className={styles.code}
          >
            Business Analysts
          </code>{" "}
          and{" "}
          <code
            style={{ background: "rgba(255, 193, 7, 0.4)" }}
            className={styles.code}
          >
            Product Developers
          </code>
        </p>
      </div>
      <section className={styles.section}>
        <div className={styles.description}>
          <h4 style={{ display: "inline-block" }}>Resources & Articles</h4>
          <div style={{ display: "inline-block" }}>
            <SmallBtn>view all &rarr;</SmallBtn>
          </div>
        </div>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Tutorials &rarr;</h2>
            <p>
              Curated articles and videos for analysts and developers to improve
              their craft
            </p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Templates &rarr;</h2>
            <p>Collection of useful notes, templates, guides and cheatsheets</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Projects &rarr;</h2>
            <p>
              Mock projects inspired by real client problems that form part of
              the tutorials
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Journal &rarr;</h2>
            <p>Tracking personal milestones and other musings, blog style</p>
          </a>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.description}>
          <h4 style={{ display: "inline-block" }}>Kanban</h4>
          <div style={{ display: "inline-block" }}>
            <SmallBtn background={"rgba(255, 193, 7, 0.4)"} color={"#231E39"}> 📡 Live</SmallBtn>
          </div>
        </div>
        <div className={styles.grid}>
          <div>Upcoming</div>
          <div>In Prog</div>
          <div className={styles.complete}>Complete</div>
        </div>
      </section>
    </div>
  );
}
