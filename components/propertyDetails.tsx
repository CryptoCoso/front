import { Card, CardContent, Stack } from "@mui/material";
import { FC, useEffect, useState } from "react";
import {
  MetadataProperties,
  propertiesPlaceholder,
  PropertyMetadata,
} from "../models/property";
import { CardComponent } from "./card";

interface PropertyDetailProps {
  propertyId: string;
}

export const PropertyDetail: FC<PropertyDetailProps> = ({ propertyId }) => {
  const [property, setProperty] = useState<PropertyMetadata | undefined>();
  useEffect(() => {
    // TODO: here we should fetch the property from the blockchain
    const property = propertiesPlaceholder.filter(
      (property: PropertyMetadata) => {
        return property.id == propertyId;
      }
    )[0];
    setProperty(property);
  }, [propertyId]);

  return (
    <>
      {property && (
        <Stack sx={{ margin: "20px" }}>
          <CardComponent
            id={property.id}
            description={property?.description ?? ""}
            image={property?.image ?? ""}
            title={property?.title ?? ""}
            price={property?.value ?? 0}
          />
          <Card>
            <CardContent>
              <h4> Additional Information</h4>
              <>
                {property.properties.map(
                  (propertyField: MetadataProperties) => (
                    <>
                      <h5>{propertyField.name}</h5>
                      <body>{propertyField.value}</body>
                    </>
                  )
                )}
              </>
            </CardContent>
          </Card>
        </Stack>
      )}
    </>
  );
};
