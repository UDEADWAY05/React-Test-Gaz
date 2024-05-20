import { FC } from "react";
import styles from "./infoBar.module.css"
import { InfoUser } from "../infoUser/infoUser";

interface InfoBarProps {
  title: string,
}

export const InfoBar: FC<InfoBarProps> = ({ title }) => {
  return <div className={styles.infoBar}>
    <h2 className={styles.infoBarTitle}>{title}</h2>
    <div>
      <InfoUser
        name="Дмитрий Касперов"
        img="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1716740/5c9d1755fe58b54c3efa4ae5a37269420b685e91.gif"
      />
    </div>
  </div>;
};