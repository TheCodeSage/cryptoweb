import { Grid, Typography, Box, ImageList, Container } from "@mui/material";
import { borderRadius } from "@mui/system";
import { useState, useEffect } from "react";
import { DrawerFlyout } from "../components/Marketplace/DrawerFlyout";
import { MarketplaceCard } from "../components/Marketplace/MarketplaceCard";
import {
  getDefaultSearchCriteria,
  filterData,
} from "../components/Marketplace/marketplaceHelper";
import { RecentListingCard } from "../components/Marketplace/RecentListingCard";
import { IMarketPlaceCardData, IMarketplaceFilter } from "../interfaces";
import {
  getMarketplaceData,
  getRecentPurchaseData,
  getRecentSaleData,
} from "../mockApi";
import { useStyles } from "../styles";

const MarketPlace = () => {
  const bgImage = require("../media/marketPlaceBg.jpg");
  const styles = useStyles();
  const [searchFilter, setSearchFilter] = useState<IMarketplaceFilter>(
    getDefaultSearchCriteria()
  );

  const [data, setData] = useState(getMarketplaceData());
  const [filteredData, setFilteredData] = useState(data);
  const [recentSale, setRecentSale] = useState(getRecentSaleData());
  const [recentPurchase, setRecentPurchase] = useState(getRecentPurchaseData());

  useEffect(() => {
    setFilteredData(filterData(searchFilter, data));
  }, [searchFilter]);

  return (
    <Container maxWidth="xl">
      <Grid
        direction="row"
        justifyContent="center"
        pb={20}
        sx={{ display: "flex", flexWrap: "wrap" }}
      >
        <img
          src={bgImage}
          style={{ position: "fixed", width: "100%", height: "100%" }}
        />
        <div className={styles.blackFade} style={{ zIndex: "1" }} />
        <Grid
          mt={12}
          item
          width="100%"
          direction="row"
          padding={2}
          zIndex={1}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            background: "#dddddd44",
            borderRadius: "20px",
          }}
        >
          <Box
            pt={3}
            pl={3}
            borderRadius={2}
            margin={2}
            sx={{
              background: "#eee",
              width: "550px",
            }}
          >
            <Typography>Recently listed: </Typography>
            <ImageList
              sx={{
                gridAutoFlow: "column",
              }}
            >
              {recentSale
                .filter((i) => i.price < 200)
                .map((i: IMarketPlaceCardData) => {
                  return <RecentListingCard cardData={i} />;
                })}
            </ImageList>
          </Box>

          <Box
            pt={3}
            pl={3}
            borderRadius={2}
            margin={2}
            sx={{
              background: "#eee",
              width: "550px",
            }}
          >
            <Typography>Recent Purchase: </Typography>
            <ImageList
              sx={{
                gridAutoFlow: "column",
              }}
            >
              {recentPurchase.map((i: IMarketPlaceCardData) => {
                return <RecentListingCard cardData={i} />;
              })}
            </ImageList>
          </Box>
        </Grid>
        <Box
          mt={2}
          sx={{
            background: "#dddddd44",
            borderRadius: "20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            zIndex: "1",
          }}
        >
          {filteredData.map((i: IMarketPlaceCardData) => {
            return <MarketplaceCard cardData={i} />;
          })}
        </Box>
        <DrawerFlyout
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
      </Grid>
    </Container>
  );
};

export default MarketPlace;
