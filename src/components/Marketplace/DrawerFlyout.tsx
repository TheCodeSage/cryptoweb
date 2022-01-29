import { Global } from "@emotion/react";
import {
  Box,
  Chip,
  List,
  ListItem,
  Paper,
  Skeleton,
  Stack,
  styled,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { IDrawerFlyoutProps, IChipData } from "../../interfaces";
import { getSearchFilterChips } from "./marketplaceHelper";
import { MarketPlaceSearch } from "./MarketPlaceSearch";

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

export const DrawerFlyout = ({
  searchFilter,
  setSearchFilter,
}: IDrawerFlyoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [chipData, setChipData] = useState<IChipData[]>(
    getSearchFilterChips(searchFilter)
  );

  const drawerBleeding = -62;

  useEffect(() => {
    setChipData(getSearchFilterChips(searchFilter));
  }, [searchFilter]);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(15% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <SwipeableDrawer
        anchor="bottom"
        ModalProps={{
          keepMounted: true,
        }}
        open={isOpen}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        variant="persistent"
      >
        <Box
          onClick={toggleDrawer}
          sx={{
            position: "absolute",
            top: drawerBleeding,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            visibility: "visible",
            right: 0,
            left: 0,
            flexDirection: "row",
            backgroundColor: "#37474Caa",
            backdropFilter: "blur(6px)",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Puller />

          <Stack display="flex" flexDirection="row" pt={1.5} height={50}>
            {chipData
              .map((data, keyIter) => {
                return (
                  <ListItem key={keyIter}>
                    <Chip label={data.label} sx={{ color: "white" }} />
                  </ListItem>
                );
              })
              .reverse()}
          </Stack>
        </Box>
        <Box
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <MarketPlaceSearch
            searchFilter={searchFilter}
            setSearchFilter={setSearchFilter}
          />
        </Box>
      </SwipeableDrawer>
    </>
  );
};
