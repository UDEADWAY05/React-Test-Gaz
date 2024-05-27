import { FC } from "react";
import styles from "./navBar.module.css";
import home from "../../assets/img/home.png";
import dashboard from "../../assets/img/calendar.png";
import chat from "../../assets/img/message.png";
import { NavLink } from "react-router-dom";
import logo from "../../assets/react.svg"
import { paths } from "../../App";

interface NavBarProps {
  full?: boolean
}

export const NavBar: FC<NavBarProps> = ({ full=false }) => {
  const mockdata = [
    { icon: home, label: 'Home', link: paths.home },
    { icon: dashboard, label: 'Dashboard', link: paths.dashBoard },
    { icon: chat, label: 'Chat', link: paths.message },
  ];

  const links = mockdata.map((link) => (
    <NavLink
      {...link}
      key={link.label}
      to={link.link}
      className={({ isActive }) => isActive ? styles.activeLink : styles.link}
    >
      <div className={styles.linkDiv}>
        <img className={styles.linkIcon} src={link.icon}></img>
        { full ? <p className={styles.linkLabel}>{link.label}</p> : ""}
      </div>
    </NavLink>
  ));


  return (
    <nav>
      { !full
        ? <div className={styles.navBar}>
          <div className={styles.navBarLogo}>
            <img src={logo} />
          </div>
          <div className={styles.navBarLinks}>
            {links}
          </div>
        </div>
        : <div className={styles.navBarFull}>
          <div className={styles.navBarLogo}>
            <img src={logo} />
          </div>
          <div className={styles.navBarLinks}>
            {links}
          </div>
        </div>}
    </nav>
  );
};