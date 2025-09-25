import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import styles from "./layout.module.scss";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className={styles.wrapper}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
