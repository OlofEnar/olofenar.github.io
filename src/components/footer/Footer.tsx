import styles from "./Footer.module.scss";


export default function Footer() {
    const year = new Date().getFullYear();


    return <footer className={styles.footer}>
        &copy; {year} Olof Maleki Nordin
    </footer>;
}
