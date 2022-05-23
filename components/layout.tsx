import { Box } from "@mui/material";
import { Navbar } from "./navbar";

export const Layout: React.FC = ({ children }) => {
  return (
    <Box flexGrow={1} display="flex" flexDirection="column">
      <Navbar />
      <main>{children}</main>
    </Box>
  );
};
