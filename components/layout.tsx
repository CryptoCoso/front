import { Navbar } from "./navbar";

export const Layout = ({ children }: React.HTMLAttributes<Element>) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
