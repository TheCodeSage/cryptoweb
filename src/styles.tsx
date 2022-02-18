import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  textNavigation: {
    padding: 15,
    color: "white",
    fontFamily: "Segoe UI",
    textDecoration: "none",
  },
  hamburgerMenuText: {
    padding: 3,
    color: "black",
    fontFamily: "Segoe UI",
    textDecoration: "none",
  },
  bgVideo: {
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: -2,
    height: "100%",
  },
  dashboardTitle: {
    color: "white",
    textAlign: "center",
    fontSize: "2.3rem",
  },
  blackFade: {
    width: "100%",
    left: 0,
    top: 0,
    height: "100%",
    position: "fixed",
    zIndex: -1,
    background: "linear-gradient(transparent 0%, #000 70%)",
  },
});
