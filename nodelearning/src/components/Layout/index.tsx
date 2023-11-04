import Head from "next/head";
import { ILayoutProps } from "./types";

export const Layout = ({ children, title = "Razmik's App" }: ILayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};
