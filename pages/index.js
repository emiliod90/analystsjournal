import Head from "next/head";
import {
  PrimaryBtn,
  SecondaryBtn,
  SmallBtn,
} from "../components/buttons/buttons";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Section from "../components/section";
import Link from "next/link";
import ArticleCard from "../components/cards/articleCard";
import HoverCard from "../components/cards/hoverCard";
import { getAllPosts } from "../utils/markdownApi";
import ArticleList from "../components/cards/articleList";

//https://codepen.io/andybarefoot/pen/wrXvLj
//https://www.w3schools.com/cssref/sel_selection.asp
// https://stackoverflow.com/questions/16094837/what-is-the-browser-default-background-color-when-selecting-text

export default function Home({ allPosts }) {
  const article = allPosts[0];
  const articles = allPosts.slice(0, 4);
  articles.forEach((element, index) =>
    console.log(new Date(element.date), index, element.title, element.image)
  );

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
        <div className={styles.grid}>
          <div style={{ padding: "16px", margin: "10px" }}>
            <HoverCard
              one={
                "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/Emilio4by3.jpg"
              }
              two={
                "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/Rohit4by3.PNG"
              }
            />
          </div>
          <div className={styles.home_text}>
            <p className={styles.home_title}>
              Hi, welcome to the Analysts Journal.
            </p>
            <p>
              A small corner of the internet that provides free, re-suable
              information for anyone interested in <b>Product Development</b> or{" "}
              <b>Service Design</b>.
            </p>
            {/* <p>
              Interested in learning more about Product Development or Service
              Design?
            </p>
            <p>Or perhaps you're trying to improve the overall game of your product?</p> */}
          </div>
        </div>
      </Section>
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
          <h4>Recent posts 🚀</h4>
        </div>
        <div>
          {articles.map((element) => (
            <ArticleList
              page={element.slug}
              title={element.title}
              date={element.date}
            />
          ))}
        </div>
        {/* <div className={styles.grid}>
          {articles.map((element) => (
            <ArticleCard
              page={element.slug}
              title={element.title}
              date={element.date}
              image={element.image}
            />
          ))}
        </div> */}
      </Section>
      <Section>
        <div className={styles.grid} style={{ marginTop: "50px" }}>
          <div className={styles.services_text}>
            <h1>
              Are you developing a product or service? 
            </h1>
            <h1>
              Trying to improve your overall game?
            </h1>
          </div>
          <div className={styles.services_text}>
            <p>
              We provide thought leadership, consulting and freelance services
              for anyone passionate about product development, via our sister company: <b><a href="/">LondonDevs.dev</a></b>
            </p>
            <div className={styles.services_buttons}>
              <SecondaryBtn>Contact us →</SecondaryBtn> 
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "image",
    "tags",
    "author",
    "tags",
    "slug",
  ]);

  return {
    props: { allPosts },
  };
}
