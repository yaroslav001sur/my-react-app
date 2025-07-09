import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer__content']}>
        <div className={styles['footer__left']}>
          <img src="/img/logo2.png" alt="Логотип платформы" className={styles['footer__logo']} />
          <p className={styles['footer__text']}>
            Мы помогаем новичкам освоить IT и найти своё призвание.
          </p>
          <p className={styles['footer__text']}>
            &copy; 2025 DevPlatform. Все права защищены.
          </p>
        </div>
        <div className={styles['footer__right']}>
          <a href="#" className={styles['footer__link']}>Условия и положения</a>
          <a href="#" className={styles['footer__link']}>Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;