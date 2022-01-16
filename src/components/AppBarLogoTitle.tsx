import { Typography } from "@mui/material";
import { padding } from "@mui/system";
import logo from "../media/logo.svg";

const AppBarLogoTitle = () => {
  return (
    <>
      <img src={logo} className="Appbar-logo" alt="logo" />
      <Typography variant="h6" align="center" noWrap>
        CryptoCreatures
      </Typography>
    </>
  );
};

export default AppBarLogoTitle;
