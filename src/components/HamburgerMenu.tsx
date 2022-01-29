import { Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, MenuItem, Menu } from "@mui/material";
import { useState } from "react";
import { NavigationProps } from "../interfaces";
import { Link } from "react-router-dom";
import { useStyles } from "../styles";

const HamburgerMenu = (props: NavigationProps) => {
  const styles = useStyles();
  const [anchorElNav, setAnchorElNav] = useState<Element>();
  const handleOpenNavMenu = (event: React.MouseEvent) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(undefined);
  };

  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
      >
        <MenuIcon htmlColor="white" fontSize="large" />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {props.pageNames.map((pageName) => (
          <MenuItem key={pageName} onClick={handleCloseNavMenu}>
            <Typography
              textAlign="center"
              component={Link}
              to={pageName}
              className={styles.hamburgerMenuText}
            >
              {pageName}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default HamburgerMenu;
