import styles from "../../styles/projects.module.css";
import Hero from "../../components/hero";
import { LargeCard } from "../../components/cards/projectCards";
import welcomeClip from "../../public/welcomeClip.png";
import microgreens from "../../public/images/microgreens.png";
import bitcoin from "../../public/images/Bitcoin.svg";
import Section from "../../components/section";
import ImageClip from "../../components/image-clip";

//https://codepen.io/2975/pen/QrZpoa
//https://freefrontend.com/css-profile-cards/

function Projects() {
  return (
    <>
      <Hero
        title={"Projects"}
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
      <div>
        <p className={styles.description}>
          A collection of{" "}
          <code
            style={{ background: "rgba(51, 181, 229, 0.4)" }}
            className={styles.code}
          >
            prototype applications
          </code>{" "}
          and{" "}
          <code
            style={{ background: "rgba(255, 193, 7, 0.4)" }}
            className={styles.code}
          >
            personal projects
          </code>
        </p>
      </div>
      <section className={styles.section}>
        <div className={styles.grid}>
          <Section>
            <LargeCard
              title={"Portfolio Tracker"}
              subtext="A personal portfolio dashboard to track all your equities, bonds and crypto assets in one place. "
              href="#"
              btnText={"In Development 🔧"}
            >
              <ImageClip
                src="https://source.unsplash.com/random/?stocks"
                alt="stocks"
                borderRadius="24px"
              />
            </LargeCard>
          </Section>
          <Section>
            <LargeCard
              title={"Real Estate Website"}
              subtext="A website for a fictional real estate investment company."
              image={"https://source.unsplash.com/random/640x640"}
              btnText={"In Development 🔧"}
              href="#"
            >
              <ImageClip
                src="https://source.unsplash.com/random/?skyline"
                alt="stocks"
              />
            </LargeCard>
          </Section>
          <Section>
            <LargeCard
              title={"Raspberry Pi Cluster"}
              subtext="Building a small RPi cluster as an all-in-one home server, to act as a private VPN, NAS and home automation suite."
              image={welcomeClip}
              btnText={"Coming Soon"}
              href="#"
            >
              <ImageClip
                src="https://source.unsplash.com/random/?cpu"
                alt="microgreens"
                borderRadius="24px"
              />
            </LargeCard>
          </Section>
          <Section>
            <LargeCard
              title={"BTC Price Alert App"}
              subtext="A simple app to create alerts based on technical indicators and price targets for BTC."
              image={bitcoin}
              btnText={"Coming Soon"}
              href="#"
            >
              <ImageClip
                src="https://source.unsplash.com/random/?bitcoin"
                alt="bitcoin"
              />
            </LargeCard>
          </Section>
          <Section>
            <LargeCard
              title={"Microgreens eStore"}
              subtext="A prototype online retail platform that sells microgreens from local growers."
              image={microgreens}
              btnText={"TBC"}
              href="#"
            >
              <ImageClip
                src="https://source.unsplash.com/random/?microgreens"
                alt="microgreens"
                borderRadius="24px"
              />
            </LargeCard>
          </Section>
          <Section>
            <LargeCard
              title={"E-commerce Platform"}
              subtext="A prototype e-commerce platform inspired by Etsy and aimed at small businesses."
              image={welcomeClip}
              btnText={"TBC"}
              href="#"
            >
              <ImageClip
                src="https://source.unsplash.com/random/?retail"
                alt="retail"
              />
            </LargeCard>
          </Section>
        </div>
      </section>
    </>
  );
}

export default Projects;
