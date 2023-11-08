import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

import "@/styles/normalize.scss";
import "@/styles/styles.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress height={10} color="darkred" />
      <Component {...pageProps} />;
    </>
  );
}
