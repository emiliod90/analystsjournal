import Link from "next/link";
import Image from "next/image";
import styles from "./articleCard.module.css";

const colours = [
  ["#022e97", "#16b3bd"],
  ["#f44d76", "#ffd592"],
  ["#3d0997", "#e9639b"],
  ["#6668d9", "#c48adf"],
  ["#e4e372", "#16b5bc"],
  ["#fcce45", "#ff863f"],
  ["#ca5080", "#f8b3b1"],
  ["#0cd7f7", "#6056f1"],
  ["#ffc92c", "#ff1161"],
  ["#fe2759", "#d89edb"],
  ["#f128b9", "#f9b86c"],
  ["#88d2ef", "#fb365e"],
  ["#63e9d5", "#0e71ae"],
  ["#ff1161", "#fe743f"],
  ["#ff7b44", "#f9509c"],
  ["#fdb186", "#fd5a43"],
  ["#16e8c8", "#b119de"],
  ["#68f510", "#0b6ce6"],
  ["#44ee66", "#1be9d8"],
  ["#ea96e4", "#9d56b4"],
  ["#4d7eef", "#7755b9"],
  ["#e7519d", "#cf70d9"],
];

export default function ArticleCard({ page, title, date, image }) {
  return (
    <Link href={`blog/${page}`}>
      <a className={styles.card}>
        <div className={styles.card_image}>
          <Image src={image} alt={title} width={300} height={300} />
        </div>
        <div className={styles.card_description}>
          <p className={styles.card_title}>{title}</p>
          <p>{date}</p>
        </div>
      </a>
    </Link>
  );
}
