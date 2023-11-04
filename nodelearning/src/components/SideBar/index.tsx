import { ISideBarProps } from "./types";

export const SideBar = ({ items }: ISideBarProps) => {
  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};
