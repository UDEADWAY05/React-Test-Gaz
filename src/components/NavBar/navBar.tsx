import { FC } from "react";
import styles from "./navBar.module.css";
import home from "../../assets/img/home.png";
import dashboard from "../../assets/img/calendar.png";
import chat from "../../assets/img/message.png";
import { NavLink } from "react-router-dom";
import { useState  } from "react";
import logo from "../../assets/react.svg"
import { paths } from "../../App";

export const NavBar: FC = () => {
  const [active, setActive] = useState(2);
  const mockdata = [
    { icon: home, label: 'Home', link: paths.home },
    { icon: dashboard, label: 'Dashboard', link: paths.dashBoard },
    { icon: chat, label: 'Chat', link: paths.message },
  ];

  const links = mockdata.map((link, index) => (
    <NavLink
      {...link}
      key={link.label}
      to={link.link}
    >
      <img className={styles.linkIcon} src={link.icon}></img>      
    </NavLink>
  ));


  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.navBarLogo}>
          <img src={logo} />
        </div>
        <div className={styles.navBarLinks}>
          {links}
        </div>
      </div>
    </nav>
  );
}