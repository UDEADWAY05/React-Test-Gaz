import { FC } from "react";
import styles from "./infoCard.module.css";

type ColorText = "negative" | "positive"

interface InfoCardProps { 
  label: string,
  firstQuantity: string,
  secondQuantity?: string,
  firstColor?: ColorText,
  secondColor?: ColorText
}

export const InfoCard: FC<InfoCardProps> = ({ label, firstQuantity, secondQuantity, firstColor, secondColor }) => {
  const firstTextStyle =
    firstColor ?
      firstColor === 'negative' ?
        styles.redText
        : styles.blueText
      : styles.text;
  const secondTextStyle =
    secondColor ?
      secondColor === 'negative'
        ? styles.redText
        : styles.blueText
      : styles.text;
  
  return <div className={styles.infoCard}>
    <p className={styles.infoCardLabel}>{label}</p>
    {secondQuantity ? <div className={styles.infoCardNums}>
        <p className={firstTextStyle}>
          {firstQuantity}
        </p>
        <p className={styles.text}>/</p>
        <p className={secondTextStyle}>
          {secondQuantity}
        </p>
      </div>
      : <div className={styles.infoCardNums}>
        <p className={firstTextStyle}>
          {firstQuantity}
        </p>
      </div>
      }
  </div>;
};