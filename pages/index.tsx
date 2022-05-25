import { FC, useContext } from "react";
import { AppContext } from "../context/state";
import { CardComponent } from "../components/card";
import { Button, Grid } from "@mui/material";
import Link from "next/link";
// import ipfs from "ipfs";

const Index: FC = () => {
  const { state: appState, setState: setAppState } = useContext(AppContext);
  return (
    <Grid
      p={"5%"}
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      alignItems="center"
      container
    >
      <Grid item>
        <Link href={"/owner"}>
          <Button style={{ textTransform: "none" }}>
            <CardComponent
              id={"placeholder"}
              imageLocal={"../static/ownerImage.jpeg"}
              title={"Owner"}
              description={"I want to make money with my house"}
            />
          </Button>
        </Link>
      </Grid>

      <Grid item>
        <Link href={"/renter"}>
          <Button style={{ textTransform: "none" }}>
            <CardComponent
              id={"placeholder"}
              imageLocal={"../static/rentImage.jpeg"}
              description={"I want to get a new place to live"}
              title={"Renter"}
            />
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Index;
