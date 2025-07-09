<<<<<<< HEAD
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
=======
import './Header.module.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          <img className="header__logo-img" alt="Jobly Logo" src="/img/logo.svg" />
        </div>
        <nav className="header__nav">
          <a href="#" className="header__nav-link">For Recruiters</a>
          <a href="#" className="header__nav-link header__nav-link--sign-up">Sign Up</a>
          <a href="#" className="header__nav-link header__nav-link--log-in">Log in</a>
>>>>>>> d889c2923708192c984468de1f001272828abddd
        </nav>
      </div>
    </header>
  );
};

export default Header;