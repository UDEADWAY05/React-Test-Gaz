import { FC } from "react";
import styles from "./infoUser.module.css";

interface InfoUserProps {
  name: string,
  img: string,
};

export const InfoUser: FC<InfoUserProps> = ({ name, img }) => {
  return <div className={styles.infoUser}>
    <div className={styles.infoUserMain}>
      <p className={styles.infoUserText}>
        Добро пожаловать!
      </p>
      <p className={styles.infoUserName}>
        {name}
      </p>
    </div>
    <img className={styles.infoUserImage} src={img} />
  </div>;
};