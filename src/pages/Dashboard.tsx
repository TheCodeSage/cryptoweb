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
      <video
        autoPlay
        loop
        muted
        className={styles.bgVideo}
        src="https://static.videezy.com/system/resources/previews/000/043/139/original/HUD-Ultron-Interface.mp4"
      />
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
