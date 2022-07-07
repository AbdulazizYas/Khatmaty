import "../styles/globals.css";

import Layout from "../components/Layout";
import { TasmeatProvider } from "../contexts/Tasmeat";

function MyApp({ Component, pageProps }) {
  return (
    <TasmeatProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TasmeatProvider>
  );
}

export default MyApp;
