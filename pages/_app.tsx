// import "../styles/globals.css";
import "antd/dist/antd.css";

import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { UserProvider } from "../hooks/useUser";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
