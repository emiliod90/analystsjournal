import styles from "./projectCards.module.css";
import { TertiaryBtn } from "../buttons/buttons";
import Image from "next/image";
import Link from "next/link";
import welcomeClip from "../../public/welcomeClip.png";

function LargeCard({
  title,
  subtext,
  btnText,
  background,
  color,
  href,
  children,
}) {
  return (
    <>
      <div className={styles.large_card} style={{ background: background }}>
        <div className={styles.card_inner}>
          {children ? (
            <div>{children}</div>
          ) : (
            <Image src={welcomeClip} width={200} height={200} />
          )}
          <h3 style={{ color: color }} className={styles.card_title}>
            {title}
          </h3>
          <p style={{ color: color }} className={styles.card_subtext}>
            {subtext}
          </p>
          <TertiaryBtn color={color}>
            <Link href={href}>
              <a>
                <p>{btnText}</p>
              </a>
            </Link>
          </TertiaryBtn>
        </div>
      </div>
    </>
  );
}

export { LargeCard };
