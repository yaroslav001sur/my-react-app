import styles from './Cta.module.css';

const Cta = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.cta__content}>
        <div className={styles.cta__text}>
          <h2 className={styles.cta__title}>Set up your profile. Let jobs find you.</h2>
          <a href="#" className={`${styles.cta__ctaButton} ${styles.cta__ctaButtonPrimary}`}>Join Now</a>
        </div>
        <img 
          className={styles.cta__image} 
          alt="CTA Image" 
          src="/img/job-image.png" 
        />
      </div>
    </section>
  );
};

export default Cta;