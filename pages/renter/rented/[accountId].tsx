import { Alert, Button, Dialog, Grid, Modal } from "@mui/material";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { PropertyDetail } from "../../../components/propertyDetails";
import {
  propertiesPlaceholder,
  PropertyMetadata,
} from "../../../models/property";

const RentedProperties: FC = () => {
  const router = useRouter();
  const { accountId } = router.query;
  const [userWantsToRescindContract, setUserWantsToRescindContract] = useState(
    false
  );
  const [properties, setProperties] = useState<PropertyMetadata[]>();
  useEffect(() => {
    // TODO: Get properties of account from blockchain
    setProperties(propertiesPlaceholder);
  }, [accountId]);

  const rescindContract = () => {
    setUserWantsToRescindContract(false);
    //TODO: Rescind contract
  };
  const showAlert = () => {
    setUserWantsToRescindContract(true);
  };
  const hideAlert = () => {
    setUserWantsToRescindContract(false);
  };

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {userWantsToRescindContract && (
        <Dialog open>
          <>
            <Alert severity="warning">
              This action is irrevocable. Are you sure?
              <Button onClick={rescindContract}> Accept </Button>
              <Button onClick={hideAlert}> Cancel </Button>
            </Alert>
          </>
        </Dialog>
      )}
      {properties &&
        properties.map((property: PropertyMetadata) => (
          <Grid item xs={2} sm={4} md={4} key={property.id}>
            <PropertyDetail propertyId={property.id} />
            <Button
              sx={{ margin: "5px" }}
              onClick={showAlert}
              variant="contained"
              color="error"
            >
              Rescind contract
            </Button>
          </Grid>
        ))}
    </Grid>
  );
};

export default RentedProperties;
