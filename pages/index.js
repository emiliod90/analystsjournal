import Head from "next/head";
import Image from "next/image";
import ServicesImg from "../public/images/services-img-uriel-soberanes.jpg";
import {
  PrimaryBtn,
  SecondaryBtn,
  SmallBtn,
} from "../components/buttons/buttons";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Section from "../components/section";
import Link from "next/link";
import HoverCard from "../components/cards/hoverCard";
import { getAllPosts } from "../utils/markdownApi";
import ArticleList from "../components/lists/articleList";

//https://codepen.io/andybarefoot/pen/wrXvLj
//https://www.w3schools.com/cssref/sel_selection.asp
// https://stackoverflow.com/questions/16094837/what-is-the-browser-default-background-color-when-selecting-text

export default function Home({ allPosts }) {
  // const article = allPosts[0];
  const articles = allPosts.slice(0, 4);
  // articles.forEach((element, index) =>
  //   console.log(new Date(element.date), index, element.title, element.image)
  // );

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
              A small corner of the internet that provides free information for
              anyone interested in <b>Product Development</b> or{" "}
              <b>Service Design</b>.
            </p>
          </div>
        </div>
      </Section>
      <Section amount={0.3}>
        <div className={styles.description}>
          <h4 style={{ display: "inline-block" }}>Resources & Articles</h4>
        </div>
        <div className={styles.grid}>
          <Link href={"/blog"}>
            <a className={styles.card}>
              <div className={styles.card_overlay}>
                <h2>Blog &rarr;</h2>
                <p>
                  Curated articles and videos for analysts and developers to
                  improve their craft
                </p>
              </div>
              <div
                className={styles.card_inner}
                style={{
                  background:
                    "url(https://source.unsplash.com/random/?mountains) center no-repeat",
                }}
              >
                <h1>Start reading </h1>
              </div>
            </a>
          </Link>
          <Link href={"/templates"}>
            <a className={styles.card}>
              <div className={styles.card_overlay}>
                <h2>Templates &rarr;</h2>
                <p>
                  Collection of useful notes, templates, guides and cheatsheets
                </p>
              </div>
              <div
                className={styles.card_inner}
                style={{
                  background:
                    "url(https://source.unsplash.com/random/640x640/?notes) center no-repeat",
                }}
              >
                <h1>Start using </h1>
              </div>
            </a>
          </Link>
          <Link href={"/projects"}>
            <a className={styles.card}>
              <div className={styles.card_overlay}>
                <h2>Projects &rarr;</h2>
                <p>
                  Projects inspired by real client problems that form part of
                  the tutorials
                </p>
              </div>
              <div
                className={styles.card_inner}
                style={{
                  background:
                    "url(https://source.unsplash.com/random/640x426/?coding) center no-repeat",
                }}
              >
                <h1>View all </h1>
              </div>
            </a>
          </Link>
          <Link href={"/about"}>
            <a className={styles.card}>
              <div className={styles.card_overlay}>
                <h2>About &rarr;</h2>
                <p>
                  Tracking personal milestones and other musings, blog style
                </p>
              </div>
              <div
                className={styles.card_inner}
                style={{
                  background:
                    "url(https://source.unsplash.com/random/640x426/?people) center no-repeat",
                }}
              >
                <h1>Who we are</h1>
              </div>
            </a>
          </Link>
        </div>
      </Section>
      <Section>
        <div className={styles.description}>
          <h4 style={{ display: "inline-block" }}>Recent posts</h4>
          <div style={{ display: "inline-block" }}>
            <SmallBtn>
              <Link href={"/blog"}>
                <a>view all &rarr;</a>
              </Link>
            </SmallBtn>
          </div>
        </div>
        <div className={styles.article_list}>
          {articles.map((element, index) => (
            <ArticleList
              key={index}
              page={element.slug}
              title={element.title}
              date={element.date}
              tags={element.tags}
            />
          ))}
        </div>
      </Section>
      <Section amount={0.4}>
        <div className={styles.description}>
          <h4>Support</h4>
        </div>
        <div className={styles.grid}>
          <div className={styles.services_image}>
            <Image
              src={ServicesImg}
              width={320}
              height={480}
              className={styles.seim}
            />
          </div>
          <div className={styles.services_text}>
            <p>Are you developing a product or service?</p>
            <p>Trying to improve your overall game?</p>
            <p>
              We provide thought leadership, consulting and freelance services
              for anyone passionate about product development, via our sister
              company:{" "}
              <b>
                <a href="/">LondonDevs.dev</a>
              </b>
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
    "slug",
  ]);

  return {
    props: { allPosts },
  };
}
