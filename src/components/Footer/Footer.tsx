import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer__content']}>
        <div className={styles['footer__left']}>
          <img src="/img/logo2.png" alt="Jobly Logo" className={styles['footer__logo']} />
          <p className={styles['footer__text']}>
            We support a pool of diverse young creatives and engineers.
          </p>
          <p className={styles['footer__text']}>
            &copy; 2023 Jobly.co Copyright and All rights reserved.
          </p>
        </div>
        <div className={styles['footer__right']}>
          <a href="#" className={styles['footer__link']}>Terms and Conditions</a>
          <a href="#" className={styles['footer__link']}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;