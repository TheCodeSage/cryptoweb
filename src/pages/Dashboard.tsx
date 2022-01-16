import { Box } from "@mui/material";
import useStyles from "../styles";

const Dashboard = () => {
  const video = require("../media/lowPolyBackground.mp4");
  const styles = useStyles();
  return (
    <>
      <table>
        <video loop autoPlay muted className={styles.bgVideo}>
          <source src={video} type="video/mp4" />
          Browser does not support video
        </video>
        <div className={styles.whiteFade} />
      </table>
    </>
  );
};

export default Dashboard;
