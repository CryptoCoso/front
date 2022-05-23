import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { ethers } from "ethers";
import { Settings, Logout, PersonAdd } from "@mui/icons-material";
import { useState, useContext } from "react";
import { AppContext } from "../context/state";
import { Maybe } from "@metamask/providers/dist/utils";
import { Erc20__factory } from "../contracts/types";

export const Navbar = () => {
  const { state: appState, setState: setAppState } = useContext(AppContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [tokenBalance, setTokenBalance] = useState<string>();
  const [tokenAddress, setTokenAddress] = useState<string>();
  const { provider, account } = appState;

  const connect = async () => {
    if (!window.ethereum?.request) {
      alert("MetaMask is not installed!");
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const provider = new ethers.providers.Web3Provider(window.ethereum as any);
    const accounts: Maybe<string[]> = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    if (!accounts || !accounts[0]) {
      alert("MetaMask is not installed!");
      return;
    }
    console.log(accounts[0], provider);

    setAppState({
      account: accounts[0],
      provider,
    });
    console.log("saved stuff", account, provider);
  };

  const getTokenBalance = async () => {
    if (!provider || !account) {
      alert("Error: Account not connected!");
      return;
    }
    if (!tokenAddress) {
      alert("Error: Token address is empty!");
      return;
    }

    // This might not exist, so we need to use ´npm typechain´ to generate it
    const token = Erc20__factory.connect(tokenAddress, provider.getSigner());

    const rawBalance = await token.balanceOf(account);
    const decimals = await token.decimals();

    const balance = ethers.utils.formatUnits(rawBalance, decimals);
    setTokenBalance(balance);
  };

  return (
    <Box display="flex" flexGrow={1} justifyContent="space-between" width="100vw">

      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
      </Box>

      <Box>
        {!account ? (
          <Button
            variant="outlined"
            onClick={connect}
            disabled={account ? true : false}
          >
            Connect
          </Button>
        ) : (
          <Button variant="contained" onClick={getTokenBalance}>
            Get Token Balance
          </Button>
        )}

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>

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
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

    </Box>
  );
};
