import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useStyles } from "../styles";

const Arena = () => {
  const bgImage = require("../media/arenaBg.jpg");
  const fgImage = require("../media/arenaFg.png");
  const styles = useStyles();
  return (
    <Container maxWidth="xl">
      <Stack display="flex" flexDirection="column" justifyItems="center">
        <Grid
          direction="row"
          justifyContent="center"
          pb={20}
          sx={{ display: "flex", flexWrap: "wrap" }}
        >
          <img
            src={bgImage}
            style={{
              position: "fixed",
              height: "100%",
              width: "100%",
              zIndex: "-1",
            }}
          />
          <img
            src={fgImage}
            style={{
              position: "absolute",
              height: "500px",
              width: "800px",
              marginTop: "30px",
            }}
          />
          <div className={styles.blackFade} />
          <Typography variant="h2" color="white" mt={14.5} ml={-20}>
            The Arena
          </Typography>
        </Grid>
        <Grid display="flex" flexDirection="row" columnGap={3}>
          <Box sx={{ background: "#eee" }}>
            <Typography>Arena 1</Typography>
            <Typography>Arena 2</Typography>
            <Typography>Arena 3</Typography>
          </Box>
          <Box sx={{ background: "#eee" }}>
            <Typography>Leaderboard</Typography>
          </Box>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Arena;
