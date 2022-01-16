import useStyles from "../styles";
import { Container, Typography } from "@mui/material";

const Dashboard = () => {
  const video = require("../media/lowPolyBackground.mp4");
  const styles = useStyles();
  return (
    <div>
      <iframe
        width="100%"
        height="210"
        src="https://www.youtube.com/embed/lRTtMcx6rSM"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"        
      ></iframe>
      {/* <video loop autoPlay muted className={styles.bgVideo}>
        <source src={video} type="video/mp4" />
        Browser does not support video
      </video> */}
      <div className={styles.whiteFade} />
      <Typography variant="h3" color="black" className={styles.test}>
        Welcome
      </Typography>
    </div>
  );
};

export default Dashboard;
