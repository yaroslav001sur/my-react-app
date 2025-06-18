import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header__content']}>
        <div className={styles['header__logo']}>
          <img src="/img/logo.svg" alt="Jobly Logo" className={styles['header__logo-img']} />
        </div>
        <nav className={styles['header__nav']}>
          <a href="#" className={styles['header__nav-link']}>For Recruiters</a>
          <a href="#" className={`${styles['header__nav-link']} ${styles['header__nav-link--sign-up']}`}>Sign Up</a>
          <a href="#" className={`${styles['header__nav-link']} ${styles['header__nav-link--log-in']}`}>Log in</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;