import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { IMarketPlaceCardData } from "../../interfaces";

export const RecentListingCard = ({
  cardData,
}: {
  cardData: IMarketPlaceCardData;
}) => {
  return (
    <Grid
      item
      margin={0.5}
      zIndex="2"
      border={1}
      borderRadius={1.5}
      sx={{ borderColor: "#ffffffdd" }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "120px",
          padding: "10px",
          background: "linear-gradient(-15deg, #d0e0e5 0%, #809095 65%)",
          backdropFilter: "blur(4px)",
        }}
      >
        <Stack
          sx={{
            borderRadius: "15px",
            overflow: "clip",
            display: "flex",
            width: "120px",
            height: "150px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={cardData.img} height="100%" />
          <Box
            mt={-2.5}
            sx={{
              width: "100%",
              justifyItems: "end",
              background: "#506065",
            }}
          >
            <Typography
              color="white"
              fontWeight="bold"
              fontSize="15px"
              textAlign="center"
            >
              {cardData.name}
            </Typography>
          </Box>
        </Stack>
        <Typography fontWeight="bold" color="#457585">
          Price: {cardData.price}
        </Typography>
      </Paper>
    </Grid>
  );
};
