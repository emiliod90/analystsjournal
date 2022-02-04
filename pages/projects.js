import styles from "../styles/about.module.css";
import Image from "next/image";
import AboutImage from "../public/welcomeClip.png";
import HoverCard from "../components/cards/hoverCard";
import TitleCard from "../components/cards/titleCard";
//https://codepen.io/2975/pen/QrZpoa
//https://freefrontend.com/css-profile-cards/

function Projects() {
  return (
    <>
      <div className={styles.about_card}>
        <div className={styles.cover}>
          <HoverCard
            one={
              "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/laura-chouette-14u6sJ6KiyI-unsplash.jpg"
            }
            two={
              "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/luke-stackpoole-mOEqOtmuPG8-unsplash.jpg"
            }
          />
          <HoverCard
            one={
              "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/eric-dekker-zP4_qK9FEQA-unsplash.jpg"
            }
            two={
              "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/nathan-dumlao-N3btvQ51dL0-unsplash.jpg"
            }
          />
          <TitleCard
            title={"Tutorials"}
            one={
              "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/rizky-subagja-ZfVEWZTHs8M-unsplash.jpg"
            }
            two={
              "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/roland-denes-9cvazp2FUzc-unsplash.jpg"
            }
          />
        </div>
      </div>
      <div>
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
    </>
  );
}

export default Projects;
