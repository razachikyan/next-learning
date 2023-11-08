import { INavBarProps } from "./types";
import { nanoid } from "nanoid";

import styles from "./styles.module.scss";

export const NavBar = ({ items }: INavBarProps) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={nanoid()}>{item}</li>
      ))}
    </ul>
  );
};
