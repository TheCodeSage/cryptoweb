import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import { DashboardCardProps, ExpandMoreProps } from "../interfaces";
import { useState } from "react";
import LikeIcon from "@mui/icons-material/ThumbUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStyles } from "../styles";

const DashboardCard = (props: DashboardCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const styles = useStyles();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 100,
        paddingLeft: props.alignment ? "40%" : 20,
        paddingRight: props.alignment ? 10 : "40%",
        paddingTop: 2,
        paddingBottom: 1,
        textAlign: props.alignment ? "start" : "start",
        borderWidth: "5px",
        borderColor: "#ffffff10",
        background: props.alignment
          ? "linear-gradient(15deg, #b7c7cC30 10%, #304045 60%)"
          : "linear-gradient(-15deg, #b7c7cC30 10%, #304045 60%)",
        backdropFilter: "blur(6px)",
        float: props.alignment ? "left" : "right",
        marginLeft: props.alignment ? -30 : 0,
        marginRight: props.alignment ? 0 : -30,
        marginTop: 5,
      }}
    >
      <CardContent
        sx={{ maxWidth: "400px", float: props.alignment ? "right" : "left" }}
      >
        <Typography variant="h4" color="white">
          {props.title}
        </Typography>
        <Typography variant="h6" color="#ddd">
          {props.subtitle}
        </Typography>

        {props.img ? (
          <CardMedia
            component="img"
            src={props.img}
            alt={props.img}
            sx={{ borderRadius: 50, maxHeight: 300 }}
          />
        ) : null}

        <Typography variant="body1" color="#bbb">
          {props.description}
        </Typography>
        <CardActions disableSpacing>
          <Typography color="white" mt={1}>
            {props.likes}
          </Typography>
          <IconButton aria-label="like" sx={{ color: "#fff" }}>
            <LikeIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon sx={{ color: "#fff" }} />
          </ExpandMore>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
