import ProfileCard from "../components/cards/profileCard";
import styles from "../styles/contact.module.css";

function Contact() {
  return (
    <div className={styles.center}>
      <div className={styles.flex}>
        <ProfileCard
          name={"Emilio D'Souza"}
          title={"Digital Craftsman and Business Analyst"}
          image={
            "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/Emilio2020.jpg"
          }
          linkedin="https://www.linkedin.com/in/emilio-d-souza-52242064/"
          location="LONDON"
        />
        <ProfileCard
          name={"Rohit Bakshi"}
          title={"Product Architect and UX Developer"}
          image={
            "https://storage.googleapis.com/emilio-public-bucket/AnalystsJournal/assets/images/misty.jpg"
          }
          linkedin="https://www.linkedin.com/in/rohit-bakshi-54854a134/"
          location="LONDON"
        />
      </div>
      Add
      <div>
        <div className={styles.sponsor_type_4}>
          <a
            className={styles.left_side}
            aria-label="Vixen"
            href="/go/vixen"
            rel="nofollow"
            style={{background: 'url("https://hfma.pornpics.com/15420.png") rgb(0, 0, 0)'}}
          ></a>
          <div className={styles.separator}></div>
          <div className={styles.right_side}>
            <div className={styles.text_section}>
              <div className={styles.text_1}>Get full access to:</div>
              <div className={styles.text_2}>Vixen</div>
            </div>
            <a className={styles.button} href="/go/vixen" rel="nofollow">
              Join Now<i className="icon icon-out"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
