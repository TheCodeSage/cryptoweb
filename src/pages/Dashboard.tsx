import useStyles from "../styles";
import { Container, Typography } from "@mui/material";

const Dashboard = () => {
  const video = require("../media/lowPolyBackground.mp4");
  const styles = useStyles();
  return (
    <Container className={styles.whiteFade}>
      <video loop autoPlay muted className={styles.bgVideo}>
        <source src={video} type="video/mp4" />
        Browser does not support video
      </video>
      <div className={styles.whiteFade} />
      <Typography variant="h3" color="black">
        Welcome
      </Typography>
    </Container>
  );
};

export default Dashboard;
