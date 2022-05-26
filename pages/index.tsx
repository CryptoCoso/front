import { FC } from "react";
import { CardComponent } from "../components/card";
import { Button, Grid } from "@mui/material";
import Link from "next/link";

const Index: FC = () => {
  return (
    <Grid p={"5%"} alignItems="center" container>
      <Grid item>
        <Link href={"/owner"}>
          <Button style={{ textTransform: "none" }}>
            <CardComponent
              id={"placeholder"}
              imageLocal={"/ownerImage.jpeg"}
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
              imageLocal={"/rentImage.jpeg"}
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
