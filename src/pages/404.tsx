import { Layout } from "@/components/Layout";
import Link from "next/link";

import styles from "./404.module.scss";

const NotFound = () => {
  return (
    <Layout title="Not found">
      <main className={styles.main}>
        <h1 className={styles.title}>Sxal ej es bace poxi</h1>
        <Link className={styles.backlink} href="/">
          Poxel
        </Link>
      </main>
    </Layout>
  );
};

export default NotFound;
