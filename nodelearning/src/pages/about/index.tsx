import { Layout } from "@/components/Layout";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";

import styles from "./styles.module.scss";

const Post = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
  ];
  return (
    <Layout title="About">
      <main className={styles.main}>
        <h1>About</h1>
        <NavBar
          items={links.map((link) => (
            <Link className={styles.link} href={link.href}>
              {link.name}
            </Link>
          ))}
        />
      </main>
    </Layout>
  );
};

export default Post;
