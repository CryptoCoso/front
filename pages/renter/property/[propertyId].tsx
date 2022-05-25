import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";
import { PropertyDetail } from "../../../components/propertyDetails";

const PropertyDetailRenter: FC = () => {
  const router = useRouter();
  const { propertyId } = router.query;

  return (
    <>
      <PropertyDetail propertyId={propertyId as string} />
      <Button href="/rent" />
    </>
  );
};

export default PropertyDetailRenter;
