import { useStyles } from "../styles";
import { getDashboardCardData } from "../mockApi";
import DashboardCard from "../components/DashboardCard";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const video = require("../media/bgVideo.mp4");
  const bgImg = require("../media/headerImg.png");
  const styles = useStyles();
  const [cardAlignment, setCardAlignment] = useState(false);
  const data = getDashboardCardData();

  useEffect(() => {
    setCardAlignment(!cardAlignment);
    console.log("style set: " + cardAlignment);
  }, []);

  return (
    <>
      <img src={bgImg} width="100%" />
      <video loop autoPlay muted className={styles.bgVideo}>
        <source src={video} type="video/mp4" />
        Browser does not support video
      </video>
      <div className={styles.blackFade} />
      <div style={{ overflowX: "clip" }}>
        {data.map((data) => (
          <DashboardCard
            key={data.id}
            title={data.title}
            subtitle={data.subtitle}
            img={data.img}
            description={data.description}
            likes={data.likes}
            alignment={data.alignment}
          />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
