import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header__content']}>
        <div className={styles['header__logo']}>
          <Link to="/">
            <img src="/img/logo.png" alt="Jobly Logo" className={styles['header__logo-img']} />
          </Link>
        </div>
        <nav className={styles['header__nav']}>
          <Link to="/" className={styles['header__nav-link']}>Для студентов</Link>
          <Link to="/cards" className={styles['header__nav-link']}>Карточки</Link>
          <Link to="/login" className={`${styles['header__nav-link']} ${styles['header__nav-link--log-in']}`}>
            Войти
          </Link>
          <Link to="/signup" className={`${styles['header__nav-link']} ${styles['header__nav-link--sign-up']}`}>
            Зарегистрироваться
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;