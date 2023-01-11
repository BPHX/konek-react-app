import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

export default function ClassroomCard({ image, title, description, onJoin }) {
  const handleJoin = () => {
    onJoin?.();
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="100"
        image={image}
        alt="image"
        sx={{
          objectPosition: "center -135px",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleJoin} sx={{ marginLeft: "auto" }}>
          Join
        </Button>
      </CardActions>
    </Card>
  );
}

ClassroomCard.defaultProps = {
  description: "",
  title: "",
  onJoin: () => {},
  image: null,
};
// Typechecking props of the MDAlert
ClassroomCard.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  onJoin: PropTypes.func,
};
