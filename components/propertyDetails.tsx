import { FC, useEffect, useState } from "react";
import { propertiesPlaceholder, Metadata } from "../models/property";
import { Card, CardContent, CardMedia, Paper, Typography } from "@mui/material";

interface PropertyDetailProps {
  propertyId: string;
}

export const PropertyDetail: FC<PropertyDetailProps> = ({ propertyId }) => {
  const [property, setProperty] = useState<Metadata | undefined>();
  useEffect(() => {
    // TODO: here we should fetch the property from the blockchain
    const property = propertiesPlaceholder.filter((property: Metadata) => {
      return property.id == propertyId;
    })[0];
    console.log(propertyId);
    console.log(property);
    setProperty(property);
  }, [propertyId]);
  return (
    <>
      {property && (
        <Card>
          <CardMedia component="img" image={property.image} alt="card image" />
          <CardContent>
            <Typography gutterBottom variant="h4">
              {property?.title}
            </Typography>
            {property?.description && (
              <Typography variant="body2" color="text.secondary">
                {property?.description}
              </Typography>
            )}
          </CardContent>
          {property?.value && (
            <Paper>
              <Typography variant="h6" color="text.secondary">
                {property?.value + " ETH"}
              </Typography>
            </Paper>
          )}
        </Card>
      )}
    </>
  );
};
