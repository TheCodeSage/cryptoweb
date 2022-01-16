import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
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
    width: "100%",
    left: 0,
    top: 0,
  },
  whiteFade: {
    position: "fixed",
    width: "100%",
    left: 0,
    top: 0,
    height: "100%",
    background: "linear-gradient(transparent 1%, #ffff 25%)",
  },
  appBar: {
    background: "linear-gradient(#37474C 5%, #000)",
  },
});

export default () => useStyles();
