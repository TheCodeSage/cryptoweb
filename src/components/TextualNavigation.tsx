import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { NavigationProps } from "../interfaces";
import useStyles from "../styles";

const AppBarLogoTitle = (props: NavigationProps) => {
  const styles = useStyles();
  return (
    <>
      {props.pageNames.map((page) => (
        <Typography
          variant="h6"
          className={styles.textNavigation}
          component={Link}
          to={page}
        >
          {page}
        </Typography>
      ))}
    </>
  );
};

export default AppBarLogoTitle;
