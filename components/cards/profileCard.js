import styles from "./profileCard.module.css";
import { PrimaryBtn, SecondaryBtn, TertiaryBtn } from "../buttons/buttons";
//https://www.telerik.com/blogs/beginners-guide-loops-in-react-jsx

function ProfileCard({ name, image, location, title, experiences, linkedin }) {
  return (
    <div className={styles.card_container}>
      <div className={styles.card}>
        <div className={styles.card_upper}>
          {image ? (
            <img
              className="round"
              src={image}
              alt="user"
              width="144px"
              height="144px"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height={144}
              width={144}
            >
              <title>Avatar</title>
              <path
                fill={"#fff"}
                d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-50.22 116.82C218.45 151.39 236.28 144 256 144s37.39 7.44 50.11 20.94c12.89 13.68 19.16 32.06 17.68 51.82C320.83 256 290.43 288 256 288s-64.89-32-67.79-71.25c-1.47-19.92 4.79-38.36 17.57-51.93zM256 432a175.49 175.49 0 01-126-53.22 122.91 122.91 0 0135.14-33.44C190.63 329 222.89 320 256 320s65.37 9 90.83 25.34A122.87 122.87 0 01382 378.78 175.45 175.45 0 01256 432z"
              />
            </svg>
          )}
          <h3>{name}</h3>
          <h4 style={{ color: "#B3B8CD", fontSize: "12px" }}>{location}</h4>
          <br />
          <p style={{ width: "75%", margin: "0 auto", color: "#B3B8CD" }}>
            {title}
          </p>
          <br />
          <div className="btn-grid">
            <SecondaryBtn>Message</SecondaryBtn>
            <a href={linkedin}>
              <TertiaryBtn>
                <div className="linkedin">
                  <b style={{ color: "#fff" }}>in</b>
                </div>
              </TertiaryBtn>
            </a>
          </div>
        </div>
        {experiences ? (
          <div className={styles.card_lower}>
            <h4 style={{ color: "#B3B8CD" }}>EXPERIENCE</h4>
            <ul className={styles.skills_list} style={{ color: "#B3B8CD" }}>
              {experiences.map((experience) => (
                <li>{experience}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <style jsx>{`
        .btn-grid {
          display: grid;
          grid-template-columns: 120px 120px;
          gap: 5px;
          justify-content: center;
        }
        .round {
          border: 1px solid #03bfcb;
          border-radius: 50%;
          padding: 7px;
        }
        .linkedin {
          margin: 0 auto;
          width: 22px;
          border-radius: 2px;
          background: #0e76a8;
          display: grid;
          place-items: center;
        }
      `}</style>
    </div>
  );
}

export default ProfileCard;
