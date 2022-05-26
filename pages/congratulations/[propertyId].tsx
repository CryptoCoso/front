import { useRouter } from "next/router";
import { FC, useEffect } from "react";

const Congratulations: FC = () => {
  const router = useRouter();
  const { propertyId } = router.query;
  useEffect(() => {
    console.log(propertyId);
    // TODO: Here we should do the renting
  }, []);
  return (
    <div>
      <h1>Congratulations for renting {propertyId} </h1>
      <p>Your rental is being processed</p>
    </div>
  );
};

export default Congratulations;
