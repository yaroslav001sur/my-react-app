import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles['hero__content']}>
        <h1 className={styles['hero__title']}>
          Candidates with Creative & Engineering Backgrounds
        </h1>
        <p className={styles['hero__text']}>
          This is the place to show yourself and land entry level jobs at cutting-edge companies. Launch your career here.
        </p>
        <a href="#" className={`${styles['hero__cta']} ${styles['hero__cta--can']}`}>Join Now</a>
        <p className={styles['hero__text']}>
          Looking for candidates? <a href="#" className={styles['hero__link']}>Hire now</a>
        </p>
        <div className={styles['hero__gradient']}>
          <img src="/img/hero-image.png" alt="Hero Image" className={styles['hero__image']} />
        </div>
      </div>
    </section>
  );
};

export default Hero;