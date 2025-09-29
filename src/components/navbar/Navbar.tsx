import {NavLink} from "react-router-dom";
import navItems from "@/_data/navItems";
import styles from "./Navbar.module.scss";
import type {NavItems} from "@/types";
import Logo from "@/assets/images/logo.svg?react";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.logo}>
                <Logo
                />
            </NavLink>
            <ul className={styles.navList}>
                {navItems.map((item: NavItems, index: number) => (
                    <li key={index} className={styles.navItem}>
                        <NavLink
                            to={item.path}
                            className={({isActive}) =>
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
