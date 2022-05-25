import { Button, Grid, Link } from "@mui/material";
import { FC, useContext, useEffect, useState } from "react";
import { CardComponent } from "../../components/card";
import { AppContext } from "../../context/state";
import { propertiesPlaceholder, Metadata } from "../../models/property";

const PropertiesList: FC = () => {
  const { state: appState, setState: setAppState } = useContext(AppContext);
  const [properties, setProperties] = useState(propertiesPlaceholder);

  useEffect(() => {
    // TODO: here we should fetch the properties from the blockchain
  }, [appState]);

  return (
    <Grid
      p={"5%"}
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      alignItems="center"
      container
    >
      {properties.map((property: Metadata) => (
        <Grid item key={property.id}>
          <Link href={`/property/${encodeURIComponent(property.id)}`}>
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
