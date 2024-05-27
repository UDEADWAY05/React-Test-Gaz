import { FC } from "react";
import styles from "./infoBar.module.css"
import { useLocation } from "react-router-dom";
import { UserCard } from "../userCard";
import menu from "../../assets/img/menu.svg";
import close from "../../assets/img/close.svg"

interface InfoBarProps {
  onOpen: () => void,
  open: boolean
}

export const InfoBar: FC<InfoBarProps> = ({ onOpen, open }) => {
  const titleForPathName: Record<string, string> = {
    "/dashBoard": "Dashboard",
    "/": "Main",
    "/message": "Chat"
  };

  const location = useLocation();
  const title = titleForPathName[location.pathname];
  
  return <div className={styles.infoBar}>
    <div className={styles.infoBarRight}>
      <button className={styles.infoBarButton} onClick={onOpen}>
        <img className={styles.infoBarImg} src={open ? close : menu} />
      </button>
      <h2 className={styles.infoBarTitle}>{title}</h2>
    </div>
    <div>
      <UserCard
        name="Дмитрий Касперов"
        img="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1716740/5c9d1755fe58b54c3efa4ae5a37269420b685e91.gif"
      />
    </div>
  </div>;
};