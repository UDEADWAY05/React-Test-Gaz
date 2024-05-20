import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import styles from "./wrapperPage.module.css";

export const WrapperPage = () => {
  return <div className={styles.wrapper}>
    <NavBar />
    <Outlet />
  </div>;
};