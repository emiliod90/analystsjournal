import Tag from "../../components/tag";
import Link from "next/link";
import Hero from "../../components/hero";
import Section from "../../components/section";
import styles from "../../styles/templates.module.css";

export default function Templates() {
  return (
    <>
      <Hero
        title={"Templates"}
        one={
          "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/laura-chouette-14u6sJ6KiyI-unsplash.jpg"
        }
        two={
          "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/luke-stackpoole-mOEqOtmuPG8-unsplash.jpg"
        }
        three={
          "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/eric-dekker-zP4_qK9FEQA-unsplash.jpg"
        }
        four={
          "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/nathan-dumlao-N3btvQ51dL0-unsplash.jpg"
        }
        five={
          "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/rizky-subagja-ZfVEWZTHs8M-unsplash.jpg"
        }
        six={
          "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/roland-denes-9cvazp2FUzc-unsplash.jpg"
        }
      />

      <div className={styles.template_grid}>
        <article className={styles.template_card}>
          <a href="#" className={styles.card_inner}>
            <h2>Plotly & Dash</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </a>
        </article>
        <article className={styles.template_card}>
          <a href="#" className={styles.card_inner}>
            <h2>FastAPI</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </a>
        </article>
        <article className={styles.template_card}>
          <a href="#" className={styles.card_inner}>
            <h2>Google Solutions for Web Analytics</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </a>
        </article>
        <article className={styles.template_card}>
          <a href="#" className={styles.card_inner}>
            <h2>Requirements & Test cases</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </a>
        </article>
        <article className={styles.template_card}>
          <a href="#" className={styles.card_inner}>
            <h2>From User Journeys to Experience Design</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </a>
        </article>
        <article className={styles.template_card}>
          <a href="#" className={styles.card_inner}>
            <h2>Star Schema</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </a>
        </article>
        <article className={styles.template_card}>
          <a href="#" className={styles.card_inner}>
            <h2>Numpy, Pandas & Dask</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </a>
        </article>
        <article className={styles.template_card}>
          <a href="#" className={styles.card_inner}>
            <h2>Go-to-Market Strategy</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </a>
        </article>
        <article className={styles.template_card}>
          <a href="#" className={styles.card_inner}>
            <h2>Cloud Deployment Intro for Analysts</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </a>
        </article>
        <article className={styles.template_card}>
          <a href="#" className={styles.card_inner}>
            <h2>Effective Process & Data Modelling</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </a>
        </article>
        <article className={styles.template_card}>
          <a href="#" className={styles.card_inner}>
            <h2>SQL and Relational Databases</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </a>
        </article>
      </div>

      {/* <Tag title={"Tutorials"} background={"rgba(51, 181, 229, 0.4)"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 512 512"
        >
          <title>ionicons-v5-j</title>
          <path
            d="M336,256c-20.56,0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62,5.77-47.26,21.14-63.76S312,80,336,80c23.83,0,45.38,9.06,60.7,25.52,15.47,16.62,23,39.22,21.26,63.63h0c-1.67,23.11-10.9,44.77-26,61C376.44,246.82,356.57,256,336,256Zm66-88h0Z"
            fill="#fff"
          />
          <path
            d="M467.83,432H204.18a27.71,27.71,0,0,1-22-10.67,30.22,30.22,0,0,1-5.26-25.79c8.42-33.81,29.28-61.85,60.32-81.08C264.79,297.4,299.86,288,336,288c36.85,0,71,9,98.71,26.05,31.11,19.13,52,47.33,60.38,81.55a30.27,30.27,0,0,1-5.32,25.78A27.68,27.68,0,0,1,467.83,432Z"
            fill="#fff"
          />
          <path
            d="M147,260c-35.19,0-66.13-32.72-69-72.93C76.58,166.47,83,147.42,96,133.45,108.86,119.62,127,112,147,112s38,7.66,50.93,21.57c13.1,14.08,19.5,33.09,18,53.52C213.06,227.29,182.13,260,147,260Z"
            fill="#fff"
          />
          <path
            d="M212.66,291.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46,0-58.07,7.68-80.57,21.62C40.93,316,23.77,339.05,16.84,366.88a27.39,27.39,0,0,0,4.79,23.36A25.32,25.32,0,0,0,41.72,400h111a8,8,0,0,0,7.87-6.57c.11-.63.25-1.26.41-1.88,8.48-34.06,28.35-62.84,57.71-83.82a8,8,0,0,0-.63-13.39C216.51,293.42,214.71,292.45,212.66,291.45Z"
            fill="#fff"
          />
        </svg>
      </Tag>
      <Tag title={"Templates"} background={"#fad089"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="20"
          height="20"
        >
          <title>Grid</title>
          <path d="M240 240H32V32h208zM480 240H272V32h208zM240 480H32V272h208zM480 480H272V272h208z" />
        </svg>
      </Tag>
      <Tag title={"Notes"} background={"#3a3f82"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="20"
          height="20"
          fill="#fff"
        >
          <title>Document</title>
          <path d="M428 224H288a48 48 0 01-48-48V36a4 4 0 00-4-4h-92a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V228a4 4 0 00-4-4z" />
          <path d="M419.22 188.59L275.41 44.78a2 2 0 00-3.41 1.41V176a16 16 0 0016 16h129.81a2 2 0 001.41-3.41z" />
        </svg>
      </Tag>
      <Tag title={"Journal"} background={"#fe9c5b"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="20"
          height="20"
          fill="#fff"
        >
          <title>Book</title>
          <path d="M464 48c-67.61.29-117.87 9.6-154.24 25.69-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48zM48 48c67.61.29 117.87 9.6 154.24 25.69 27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48z" />
        </svg>
      </Tag> */}
    </>
  );
}
