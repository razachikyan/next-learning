import { useEffect, useState } from "react";
import { NextPageContext } from "next";
import Link from "next/link";
import { Layout } from "@/components/Layout";
import { NavBar } from "@/components/NavBar";
import { Product } from "@/components/Product";
import { MoonLoader } from "react-spinners";
import "dotenv/config";

import styles from "./styles.module.scss";

const Products = ({ products: serverProducts }: any) => {
  const [products, setProducts] = useState(serverProducts);
  useEffect(() => {
    const load = async () => {
      const data = await fetch("http://localhost:4200/products").then((res) =>
        res.json()
      );
      setProducts(data);
    };
    if (!serverProducts) {
      load();
    }
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
  ];

  if (!products)
    return (
      <Layout className={styles.loading_box} title="products">
        <MoonLoader color="#140cb4" />
      </Layout>
    );

  return (
    <Layout title="products">
      <main className={styles.main}>
        <NavBar
          items={links.map((link) => (
            <Link className={styles.link} href={link.href}>
              {link.name}
            </Link>
          ))}
        />
        <h1>Products</h1>
        <ul className={styles.list}>
          {products.map((product: any) => (
            <Product data={product} />
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export const getServerSideProps = async ({ req }: NextPageContext) => {
  const products = await fetch(String(process.env.BASE_URL)).then((res) =>
    res.json()
  );
  return { props: { products } };
};

export default Products;
