import { Box, Button, Link, Modal, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { PropertyDetail } from "../../../components/propertyDetails";

const PropertyDetailRenter: FC = () => {
  const router = useRouter();
  const { propertyId } = router.query;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Stack sx={{ alignContent: "center" }}>
      <PropertyDetail propertyId={propertyId as string} />
      <Button
        sx={{ margin: "5px" }}
        onClick={handleOpen}
        variant="contained"
        color="success"
      >
        Rent
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Terms and conditions
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Terms and conditions should be here.
          </Typography>
          <Button color="primary">
            <Link
              href={`/congratulations/${encodeURIComponent(
                (propertyId as string) ?? ""
              )}`}
            >
              I accept
            </Link>
          </Button>
        </Box>
      </Modal>
    </Stack>
  );
};

export default PropertyDetailRenter;
