import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface CardProps {
  id: string;
  title: string;
  description?: string;
  image?: string;
  imageLocal?: string;
  price?: number;
}

export const CardComponent: FC<CardProps> = ({
  title,
  description,
  image,
  imageLocal,
  price,
}) => {
  return (
    <Card
      sx={{
        maxWidth: "500px",
      }}
    >
      <CardMedia
        sx={{ height: "300px" }}
        component="img"
        image={imageLocal ?? image}
        alt="card image"
      />
      <CardContent>
        <Typography gutterBottom variant="h4">
          {title}
        </Typography>
        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
        {price && <Typography variant="h5">{price + " ETH"}</Typography>}
      </CardContent>
    </Card>
  );
};
