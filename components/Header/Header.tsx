import React from "react";
import styles from "./Header.module.scss";
import { Navigation } from "../Navigation/Navigation";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "About",
    href: "/about",
  },
];

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Navigation navlinks={navItems}></Navigation>
    </header>
  );
};
