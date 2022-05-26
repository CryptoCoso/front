import {
  Avatar,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
} from "@mui/material";
import { House } from "@mui/icons-material";
import { useState, useContext, FC, MouseEvent } from "react";
import { AppContext } from "../context/state";
import { connectToMetamask } from "../utils/metamask";
import Link from "next/link";

export const Navbar: FC = () => {
  const { state: appState, setState: setAppState } = useContext(AppContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMetamask = async () => {
    try {
      const connected = await connectToMetamask();
      if (connected) {
        setAppState(connected);
      }
    } catch (error) {
      if (typeof error === "string") {
        alert(error); // works, `e` narrowed to string
      } else if (error instanceof Error) {
        alert(error.message); // works, `e` narrowed to Error
      }
    }
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        position: "sticky",
        paddingX: "2rem",
        textAlign: "center",
        backgroundColor: "#092A4E",
        color: "#fff",
      }}
    >
      <Link href={"/"}>
        <Button>
          <img
            src="/logo.png"
            alt="logo"
            height={"50px"}
            style={{ borderRadius: "5%" }}
          />
        </Button>
      </Link>
      <Grid item xs={true} />
      <Link href={"/about"}>
        <Button
          variant="outlined"
          sx={{
            alignSelf: "center",
            height: "50px",
          }}
        >
          About
        </Button>
      </Link>
      <Button
        variant="contained"
        onClick={handleMetamask}
        disabled={appState.account ? true : false}
        sx={{
          alignSelf: "center",
          height: "50px",
        }}
      >
        {appState.account ? "Connected" : "Connect Metamask"}
      </Button>
      {appState.account && (
        <>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 36, height: 36 }}>
                {appState.account?.slice(-3)}
              </Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <Link
                href={`/renter/rented/${encodeURIComponent(appState.account)}`}
              >
                <Button>
                  <House sx={{ padding: "0px 5px 0px 0px" }} />{" "}
                  {"My Rented Properties"}
                </Button>
              </Link>
            </MenuItem>
          </Menu>
        </>
      )}
    </Stack>
  );
};
