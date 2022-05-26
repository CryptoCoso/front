import { Button, Grid, Link } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { CardComponent } from "../../components/card";
import { propertiesPlaceholder, PropertyMetadata } from "../../models/property";

const PropertiesList: FC = () => {
  const [properties, setProperties] = useState<PropertyMetadata[]>([]);

  useEffect(() => {
    setProperties(propertiesPlaceholder);
  }, []);

  return (
    <Grid
      p={"5%"}
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      alignItems="center"
      container
    >
      {properties.map((property: PropertyMetadata) => (
        <Grid item key={property.id}>
          <Link href={`/renter/property/${encodeURIComponent(property.id)}`}>
            <Button style={{ textTransform: "none" }}>
              <CardComponent
                id={property.id}
                image={property.image}
                title={property.title}
                description={property.description}
                price={property.value}
              />
            </Button>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default PropertiesList;
