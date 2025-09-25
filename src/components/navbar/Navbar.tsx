import { useState } from "react";
import { NavLink } from "react-router-dom";
import navItems from "@/_data/navItems";
import styles from "./Navbar.module.scss";
import type { NavItems } from "@/types";
import omnImage from "@/assets/images/omn.svg";

export default function Navbar() {
  const [flipped, setFlipped] = useState(false);

  const handleLogoClick = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.logo} onClick={handleLogoClick}>
        <img
          src={omnImage}
          alt="Logo"
          className={flipped ? styles.flipped : ""}
        />
      </NavLink>
      <ul className={styles.navList}>
        {navItems.map((item: NavItems, index: number) => (
          <li key={index} className={styles.navItem}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
