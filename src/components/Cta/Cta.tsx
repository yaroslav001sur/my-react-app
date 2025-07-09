import styles from './Cta.module.css';

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
    </section>
  );
};

export default Connect;
