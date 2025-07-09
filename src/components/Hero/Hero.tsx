import styles from './Hero.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles['hero__content']}>
        <h1 className={styles['hero__title']}>
          Изучайте программирование с нуля
        </h1>
        <p className={styles['hero__text']}>
          Присоединяйтесь к тысячам учеников и начните карьеру в IT. Практические курсы от опытных разработчиков.
        </p>
        <a href="#" className={`${styles['hero__cta']} ${styles['hero__cta--can']}`}>Зарегистрироваться</a>
        <p className={styles['hero__text']}>
          Ищете возможности? <a href="#" className={styles['hero__link']}>Найдёте их здесь</a>
        </p>
        <div className={styles['hero__gradient']}>
          <img src="/img/hero-image.png" alt="Код на ноутбуке" className={styles['hero__image']} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;