import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Hej 👋, I'm Olof Maleki Nordin</h2>
        <h1 className={styles.title}>I'm a developer and designer.</h1>
      </div>
    </section>
  );
};

export default Hero;
