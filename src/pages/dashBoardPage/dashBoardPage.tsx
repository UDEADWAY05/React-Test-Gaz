import { InfoBar } from "../../components/infoBar"
import styles from "./dashBoardPage.module.css"

export const DashBoardPage = () => {
  return <div className={styles.dashBoard}>
    <InfoBar
      title="Dashboard"
    />
    <div className={styles.dashBoardMain}>
      <h2>DashBoard</h2>
    </div>
  </div>;
}