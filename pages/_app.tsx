import "../styles/globals.css";
import type { AppProps } from "next/app";
import Router from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
