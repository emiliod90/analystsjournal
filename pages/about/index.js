import styles from "../../styles/about.module.css";
import Image from "next/image";
import AboutImage from "../../public/welcomeClip.png";
import { SmallBtn } from "../../components/buttons/buttons";
import HoverCard from "../../components/cards/hoverCard";
import TitleCard from "../../components/cards/titleCard";
import Section from "../../components/section";
import Hero from "../../components/hero";
//https://codepen.io/2975/pen/QrZpoa
//https://freefrontend.com/css-profile-cards/

const tasks = {
  backlog: [
    { id: 1, task: "Make data governance notes" },
    { id: 2, task: "Pass the Azure Developer Test" },
    { id: 3, task: "Setup Spark/PySpark Docker env" },
  ],
  active: [{ id: 1, task: "Complete the 'onboarding' guide" }],
  complete: [{ id: 2, task: "Complete Analysts Journal" }],
};

function About() {
  return (
    <>
      <Hero
        title={"About"}
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
      <Section>
        <div className={styles.text}>
          <h2>The Analysts Journal</h2>
          <p>
            The Analysts Journal is a collection of notes, templates and guides
            that we've assembled over the years. Topics broadly fall under{" "}
            <b>Service Design</b>, <b>Product Development</b> and{" "}
            <b>Technology</b>.
          </p>
          <br></br>
          <h2>Who we are</h2>
          <p>
            We're two gents who have a thirst for knowledge and a care for
            sharing. Among other things, we have a shared appreciation for good
            coffee ☕ and equally good ales 🍻.
          </p>
          <br></br>
          <p>
            Based in London, UK, we spend most of our time solving problems or
            building applications. If you're in London and/or fancy a chat about
            almost anything, let's connect below.
          </p>
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
            <h4
              style={{
                background: "rgb(50, 54, 57)",
                color: "rgb(251, 251, 249)",
              }}
            >
              ⌛ Upcoming
            </h4>
            <ul>
              {tasks.backlog.map((backlog) => (
                <li key={backlog.id} className={styles.task_item}>
                  <p>{backlog.task}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.kanban_card}>
            <h4 style={{ background: "#77aaff" }}>✍ In Progress</h4>
            <ul>
              {tasks.active.map((active) => (
                <li key={active.id} className={styles.task_item}>
                  <p>{active.task}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.kanban_card}>
            <h4 style={{ background: "#66bb6a" }}>✅ Complete</h4>
            <ul>
              {tasks.complete.map((complete) => (
                <li key={complete.id} className={styles.task_item}>
                  <p>{complete.task}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <Section>
        <div className={styles.about_card}>
          <div className={styles.cover}>
            <div className={styles.image}>
              <Image
                src="https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/Rohit4by3.PNG"
                alt="Picture of the author"
                width={225}
                height={300}
                className={styles.about_profile_photo}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
              <div className={styles.fade_box}>
                <div className={styles.fade_box_text}>
                  <p className={styles.author_name}>Rohit Bakshi</p>
                  <p className={styles.author_title}>
                    <b>Product Architect</b>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.image}>
              <Image
                src="https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/emilio_shades.jpg"
                alt="Picture of the author"
                width={225}
                height={300}
                className={styles.about_profile_photo}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
              <div className={styles.fade_box}>
                <div className={styles.fade_box_text}>
                  <p className={styles.author_name}>Emilio D'Souza</p>
                  <p className={styles.author_title}>
                    <b>Digital Craftsman</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

export default About;
