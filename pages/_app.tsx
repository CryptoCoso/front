import { AppProps } from "next/app";
import { Layout } from "../components/layout";
import { AppWrapper } from "../context/state";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
};

export default MyApp;
