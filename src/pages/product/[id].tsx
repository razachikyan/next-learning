import { useEffect, useState } from "react";
import { NextPageContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Layout } from "@/components/Layout";
import { NavBar } from "@/components/NavBar";
import { MoonLoader } from "react-spinners";
import CustomImage from "@/components/Image";
import "dotenv/config";

import styles from "./styles.module.scss";

const Product = ({ product: serverProduct }: any) => {
  const [product, setProduct] = useState(serverProduct);
  const { query } = useRouter();
  useEffect(() => {
    const load = async () => {
      const data = await fetch(
        `${process.env.BASE_URL}/${query.id}`
      ).then((res) => res.json());
      setProduct(data);
    };
    if (!serverProduct) {
      load();
    }
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
  ];

  if (!product)
    return (
      <Layout className={styles.loading_box} title="products">
        <MoonLoader color="#140cb4" />
      </Layout>
    );

  return (
    <Layout title={`Post ${product.name} ${product.id}`}>
      <main className={styles.main}>
        <NavBar
          items={links.map((link) => (
            <Link className={styles.link} href={link.href}>
              {link.name}
            </Link>
          ))}
        />
        <div className={styles.box}>
          <h1 className={styles.title}>{product.name}</h1>
          <CustomImage height={400} />
          <p className={styles.descr}>{product.descr}</p>
        </div>
      </main>
    </Layout>
  );
};

export const getServerSideProps = async ({ query, req }: NextPageContext) => {
  const product = await fetch(
    `http://localhost:4200/products/${query.id}`
  ).then((res) => res.json());
  return { props: { product } };
};

export default Product;
