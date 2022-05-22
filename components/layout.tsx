import { Navbar } from "./navbar";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
