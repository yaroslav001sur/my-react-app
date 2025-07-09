import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

          <button 
            onClick={() => setIsModalOpen(true)} 
            className={`${styles['header__nav-link']} ${styles['header__nav-link--log-in']}`}
            type="button"
          >
            Войти
          </button>

          <button 
            onClick={() => setIsModalOpen(true)} 
            className={`${styles['header__nav-link']} ${styles['header__nav-link--sign-up']}`}
            type="button"
          >
            Зарегистрироваться
          </button>
        </nav>
      </div>

      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </header>
  );
};

export default Header;