import { ISideBarProps } from "./types";

import styles from "./styles.module.scss";
import { nanoid } from "nanoid/non-secure";

export const SideBar = ({ items }: ISideBarProps) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={nanoid()}>{item}</li>
      ))}
    </ul>
  );
};
