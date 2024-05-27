import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import styles from "./wrapperPage.module.css";
import { InfoBar } from "../../components/infoBar";
import { useState } from "react";
import { Drawer } from "@mui/material";

export const WrapperPage = () => {
  const [open, setOpen] = useState<boolean>(false)
  const handleOpen: (value: boolean) => void = (value: boolean) => {
    setOpen(value)
  }
  return <div className={styles.wrapper}>
    <div className={styles.wrapperNavBar}>
      <NavBar />
    </div>
    <Drawer open={open} onClose={() => setOpen(false)}>
      <NavBar full/>
    </Drawer>
    <div className={styles.wrapperMain}>
      <InfoBar onOpen={() => setOpen(true)} open={open} />
      <Outlet />
    </div>
  </div>;
};