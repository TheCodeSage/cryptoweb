import { Paper, Grid, Typography, Stack, Box } from "@mui/material";
import { IMarketPlaceCardData } from "../../interfaces";

export const MarketplaceCard = ({
  cardData,
}: {
  cardData: IMarketPlaceCardData;
}) => {
  return (
    <Grid
      item
      margin={1.5}
      zIndex="2"
      border={2}
      borderRadius={1.5}
      sx={{ borderColor: "#ffffffdd" }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "250px",
          padding: "20px",
          background: "linear-gradient(-15deg, #aaaaaaaa 0%, #809095 65%)",
          backdropFilter: "blur(4px)",
        }}
      >
        <Grid container direction="row">
          <Grid item xs={6}>
            <Typography
              color="white"
              sx={{
                float: "right",
                fontWeight: "bold",
                fontSize: "17px",
              }}
            >
              Attributes:
            </Typography>
            <Typography
              color="whiteSmoke"
              fontSize="15px"
              sx={{ float: "right" }}
            >
              Attack: {cardData.attributes.attackFloor} -{" "}
              {cardData.attributes.attackCeiling}
            </Typography>
            <Typography
              color="whiteSmoke"
              fontSize="15px"
              sx={{ float: "right" }}
            >
              Defense: {cardData.attributes.defense}
            </Typography>
            <Typography
              color="whiteSmoke"
              fontSize="15px"
              sx={{ float: "right" }}
            >
              Speed: {cardData.attributes.speed}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            color="whiteSmoke"
            fontSize="15px"
            sx={{ float: "right", justifyItems: "right" }}
          >
            Skill: {cardData.attributes.skill}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            justifyItems: "center",
            display: "grid",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Stack
            sx={{
              borderRadius: "15px",
              overflow: "clip",
              display: "flex",
              width: "250px",
              height: "200px",
              alignItems: "center",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            <img src={cardData.img} height="100%" />
            <Box
              mt={-3}
              sx={{
                width: "100%",
                justifyItems: "end",
                background: "#506065ee",
              }}
            >
              <Typography
                color="white"
                fontWeight="bold"
                fontSize="17px"
                textAlign="center"
              >
                {cardData.name}
              </Typography>
            </Box>
          </Stack>
          <Stack flexDirection="row">
            <Typography color="whitesmoke" fontSize="15px" fontWeight="bold" mr={2}>
              Tier: {cardData.tier}
            </Typography>
            <Typography color="whiteSmoke" fontSize="15px" fontWeight="bold" ml={2}>
              Price: {cardData.price}
            </Typography>
          </Stack>
        </Grid>
      </Paper>
    </Grid>
  );
};
