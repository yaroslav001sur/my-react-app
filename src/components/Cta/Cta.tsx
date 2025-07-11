import styles from './Cta.module.css';

const Connect = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.cta__content}>
        <div className={styles.cta__text}>
          <h2 className={styles.cta__title}>Начните бесплатно — первый урок в подарок!</h2>
          <a href="#" className={`${styles.cta__ctaButton} ${styles['cta__cta-button--primary']}`}>
            Зарегистрироваться
          </a>
        </div>
        <img
          src="/img/job-image.png"
          alt="График роста"
          className={styles.cta__image}
        />
      </div>
    </section>
  );
};

export default Connect;