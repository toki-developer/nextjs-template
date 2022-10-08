import type { AppPropsWithLayout } from "next/app";
import Head from "next/head";
import type { ReactElement } from "react";

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);
  return (
    <>
      <Head>
        <title>sample</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default App;
