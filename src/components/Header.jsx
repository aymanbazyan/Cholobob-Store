import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link to={"/"} className={styles.logo}>
        Cholobob <Icon icon="lucide:box" /> Store
      </Link>
      <ul className={styles.ul}>
        <NavLink className={styles.link} to="/">
          <Icon icon="ion:home" /> Home
        </NavLink>

        <NavLink className={styles.link} to="/store">
          <Icon icon="el:shopping-cart" /> Store
        </NavLink>

        <NavLink className={styles.link} to="/payment">
          <Icon icon="el:credit-card" /> Payment
        </NavLink>

        <NavLink className={styles.link} to="/settings">
          <Icon icon="el:adjust-alt" /> Settings
        </NavLink>
      </ul>
    </header>
  );
}

export default Header;
