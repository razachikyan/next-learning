import Head from "next/head";
import { ILayoutProps } from "./types";

export const Layout = ({
  children,
  title = "Razmik's App",
  className,
}: ILayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={className ?? ""}>{children}</div>
    </>
  );
};
