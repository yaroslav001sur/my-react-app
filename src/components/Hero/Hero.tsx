import './Hero.module.css';

const HeroSection = () => {
  return (
<<<<<<< HEAD
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
=======
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Candidates with Creative & Engineering Backgrounds</h1>
        <p className="hero__text">This is the place to show yourself and land entry level jobs at cutting-edge companies. Launch your career here.</p>
        <a href="#" className="hero__cta hero__cta--can">Join Now</a>
        <p className="hero__text">Looking for candidates? <a href="#" className="hero__link">Hire now</a></p>
        <div className="hero__gradient">
          <img className="hero__image" alt="Hero Image" src="/img/hero-image.png" />
>>>>>>> d889c2923708192c984468de1f001272828abddd
        </div>
      </div>
    </section>
  );
};

export default HeroSection;