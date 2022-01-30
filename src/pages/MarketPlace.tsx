import { Button, Grid, Paper, Stack, Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { DrawerFlyout } from "../components/Marketplace/DrawerFlyout";
import {
  getDefaultSearchCriteria,
  filterData,
} from "../components/Marketplace/marketplaceHelper";
import { IMarketPlaceCardData, IMarketplaceFilter } from "../interfaces";
import { getMarketplaceData } from "../mockApi";

const MarketPlace = () => {
  const [searchFilter, setSearchFilter] = useState<IMarketplaceFilter>(
    getDefaultSearchCriteria()
  );

  const [data, setData] = useState(getMarketplaceData());
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(filterData(searchFilter, data));
  }, [searchFilter]);

  return (
    <Grid
      direction="row"
      pt={10}
      justifyContent="center"
      pb={20}
      sx={{ display: "flex", flexWrap: "wrap" }}
    >
      <img
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngmart.com%2Ffiles%2F5%2FMarketplace-PNG-Photos.png&f=1&nofb=1"
        style={{ position: "fixed", width: "75%" }}
      />

      <Grid
        item
        width="100%"
        direction="row"
        padding={3}
        zIndex={1}
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Box
          sx={{
            background: "white",
            height: "250px",
            width: "45%",
            padding: "20px",
            margin: "10px",
          }}
        >
          <Typography>Recent Listing: </Typography>
        </Box>
        <Box
          sx={{
            background: "white",
            height: "250px",
            width: "45%",
            padding: "20px",
            margin: "10px",
          }}
        >
          <Typography>Recent Purchase: </Typography>
        </Box>
      </Grid>

      {filteredData.map((i: IMarketPlaceCardData) => {
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
                background:
                  "linear-gradient(-15deg, #aaaaaaaa 0%, #809095 65%)",
                backdropFilter: "blur(4px)",
              }}
            >
              <Grid container direction="row">
                <Grid item xs={6}>
                  <Typography
                    color="whitesmoke"
                    fontSize="15px"
                    fontWeight="bold"
                  >
                    Tier: {i.tier}
                  </Typography>
                  <Typography
                    color="whiteSmoke"
                    fontSize="15px"
                    fontWeight="bold"
                  >
                    Price: {i.price}
                  </Typography>
                </Grid>
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
                    Attack: {i.attributes.attackFloor} -{" "}
                    {i.attributes.attackCeiling}
                  </Typography>
                  <Typography
                    color="whiteSmoke"
                    fontSize="15px"
                    sx={{ float: "right" }}
                  >
                    Defense: {i.attributes.defense}
                  </Typography>
                  <Typography
                    color="whiteSmoke"
                    fontSize="15px"
                    sx={{ float: "right" }}
                  >
                    Speed: {i.attributes.speed}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  color="whiteSmoke"
                  fontSize="15px"
                  sx={{ float: "right", justifyItems: "right" }}
                >
                  Skill: {i.attributes.skill}
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
                  <img src={i.img} height="100%" />
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
                      {i.name}
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            </Paper>
          </Grid>
        );
      })}

      <DrawerFlyout
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
    </Grid>
  );
};

export default MarketPlace;
