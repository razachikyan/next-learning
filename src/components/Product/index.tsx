import Link from "next/link";
import CustomImage from "../Image";

import styles from "./styles.module.scss";

export const Product = (props: any) => {
  return (
    <div className={styles.container}>
      <CustomImage />
      <Link href={`/product/[id]`} as={`/product/${props.data.id}`}>
        <h3 className={styles.name}>{props.data.name}</h3>
      </Link>
      <p className={styles.descr}>{props.data.descr}</p>
      <span className={styles.number}>{props.data.id}</span>
    </div>
  );
};
