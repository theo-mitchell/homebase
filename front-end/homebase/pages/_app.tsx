import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Source_Code_Pro } from "@next/font/google";
import Layout from "../components/layout";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import Head from "next/head";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <>
      <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />      </Head>
      <main className={sourceCodePro.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}
