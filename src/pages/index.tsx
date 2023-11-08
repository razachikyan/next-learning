import { Layout } from "@/components/Layout";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";

import styles from "./styles.module.scss";

const General = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
  ];
  return (
    <Layout>
      <main className={styles.main}>
        <h1>Home</h1>
        <NavBar
          items={links.map((link) => (
            <Link href={link.href} className={styles.link}>
              {link.name}
            </Link>
          ))}
        />
      </main>
    </Layout>
  );
};

export default General;
