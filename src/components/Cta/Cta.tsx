import styles from './Cta.module.css';

<<<<<<< HEAD
const Connect = () => {
  return (
    <section className="cta">
        <div className="cta__content">
            <div className="cta__text">
            <h2 className="cta__title">Начните бесплатно — первый урок в подарок!</h2>
            <a href="#" className="cta__cta-button cta__cta-button--primary">Зарегистрироваться</a>
            </div>
             <img src="/img/job-image.png" alt="График роста" className={styles['cta__image']} />
        </div>
=======
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
>>>>>>> d889c2923708192c984468de1f001272828abddd
    </section>
  );
};

<<<<<<< HEAD
export default Connect;
=======
export default Cta;
>>>>>>> d889c2923708192c984468de1f001272828abddd
