import { INavBarProps } from "./types";

import styles from "./styles.module.scss";
import { nanoid } from "nanoid";

export const NavBar = ({ items }: INavBarProps) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={nanoid()}>{item}</li>
      ))}
    </ul>
  );
};
