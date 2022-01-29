import {
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
  Box,
  makeStyles,
  List,
} from "@mui/material";
import { useState, useCallback, useEffect } from "react";
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
      pt={10}
      justifyContent="center"
      pb={20}
      sx={{ background: "#ccc", display: "flex", flexWrap: "wrap" }}
    >
      {filteredData.map((i: IMarketPlaceCardData) => {
        return (
          <Grid item padding={2}>
            <Paper
              elevation={3}
              sx={{
                maxWidth: "280px",
                height: "320px",
                padding: "20px",
              }}
            >
              <Typography>Name: {i.name}</Typography>{" "}
              <Typography>Tier: {i.tier}</Typography>
              <Typography>Price: {i.price}</Typography>
              <Box
                sx={{
                  borderRadius: "110px",
                  overflow: "clip",
                  marginX: "35px",
                }}
              >
                <img src={i.img} width="100%" height="200px" />
              </Box>
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
