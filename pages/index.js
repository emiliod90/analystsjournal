import Head from "next/head";
import Image from "next/image";
import { SmallBtn } from "../components/buttons/buttons";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Section from "../components/section";
import Link from "next/link";
//https://codepen.io/andybarefoot/pen/wrXvLj
//https://www.w3schools.com/cssref/sel_selection.asp
// https://stackoverflow.com/questions/16094837/what-is-the-browser-default-background-color-when-selecting-text

const tasks = {
  backlog: [
    { id: 1, task: "Make data governance notes" },
    { id: 2, task: "Pass the Azure Developer Test" },
    { id: 3, task: "Setup Spark/PySpark Docker env" },
  ],
  active: [{ id: 1, task: "Complete the 'onboarding' guide" }],
  complete: [{ id: 2, task: "Complete Analysts Journal" }],
};

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
          <motion.div
            className={styles.title_text}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={({ duration: 0.8 }, 0.1)}
          >
            The Analysts
            <br />
            Journal
          </motion.div>
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
      <Section>
        <div className={styles.description}>
          <h4 style={{ display: "inline-block" }}>Resources & Articles</h4>
          <div style={{ display: "inline-block" }}>
            <SmallBtn>
              <Link href={"/resources"}>
                <a>view all &rarr;</a>
              </Link>
            </SmallBtn>
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
      </Section>
      <Section>
        <div className={styles.description}>
          <h4 style={{ display: "inline-block" }}>Kanban</h4>
          <div style={{ display: "inline-block" }}>
            <SmallBtn background={"rgba(255, 193, 7, 0.4)"} color={"#231E39"}>
              📡 Live
            </SmallBtn>
          </div>
        </div>
        <div className={styles.kanban_grid}>
          <div className={styles.kanban_card}>
            <h4 style={{background: "rgb(50, 54, 57)", color: "rgb(251, 251, 249)"}}>⌛ Upcoming</h4>
            <ul>
            {tasks.backlog.map((backlog) => (
              <li key={backlog.id} className={styles.task_item}><p>{backlog.task}</p></li>
            ))}</ul>
          </div>
          <div className={styles.kanban_card}>
            <h4 style={{background: "#77aaff"}}>✍ In Progress</h4>
            <ul>
            {tasks.active.map((active) => (
              <li key={active.id} className={styles.task_item}><p>{active.task}</p></li>
            ))}</ul>
          </div>
          <div className={styles.kanban_card}>
            <h4 style={{background: "#66bb6a"}}>✅ Complete</h4>
            <ul>
            {tasks.complete.map((complete) => (
              <li key={complete.id} className={styles.task_item}><p>{complete.task}</p></li>
            ))}</ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
