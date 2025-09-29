import Footer from "../footer/Footer";
import {Outlet} from "react-router-dom";
import Navbar from "../navbar/Navbar";
import styles from "./layout.module.scss";

type LayoutProps = { variant?: "default" | "narrow" };

export default function Layout({variant = "default"}: LayoutProps) {
    return (
        <>
            <Navbar/>
            <main className={`${styles.wrapper} ${variant === "narrow" ? styles.narrow : ""}`}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};
