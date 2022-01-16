import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import AppBarLogoTitle from "./AppBarLogoTitle";
import useStyles from "../styles";
import HamburgerMenu from "./HamburgerMenu";
import UserAvatar from "./UserAvatar";
import TextualNavigation from "./TextualNavigation";

const MyAppBar = () => {
  const pages = ["Dashboard", "Yggdrasil", "Marketplace", "Info"];
  const styles = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar className={styles.appBar}>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <HamburgerMenu pageNames={pages} />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "inline-flex", md: "flex" },
            alignItems: "center",
            justifyItems: "right",
          }}
        >
          <AppBarLogoTitle />
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <TextualNavigation pageNames={pages} />
        </Box>

        <UserAvatar />
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
