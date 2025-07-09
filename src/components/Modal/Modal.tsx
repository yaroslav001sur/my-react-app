import React, { useState } from 'react';
import styles from './Modal.module.css';

const Modal = ({ onClose }: { onClose: () => void }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles['modal-overlay']}>
      <div className={styles.modal}>
        <form className={styles['modal__form']}>
          <h2 className={styles['modal__title']}>
            {isLogin ? 'Вход' : 'Регистрация'}
          </h2>

          {!isLogin && (
            <>
              <label htmlFor="name" className={styles['modal__label']}>Имя:</label>
              <input type="text" id="name" name="name" className={styles['modal__input']} required />
            </>
          )}

          <label htmlFor="email" className={styles['modal__label']}>Email:</label>
          <input type="email" id="email" name="email" className={styles['modal__input']} required />

          <label htmlFor="password" className={styles['modal__label']}>Пароль:</label>
          <input type="password" id="password" name="password" className={styles['modal__input']} required />

          <div className={styles['modal__buttons']}>
            <button type="submit" className={styles['modal__button'] + ' ' + styles['modal__button--primary']}>
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </button>
            <button
              type="button"
              className={styles['modal__button'] + ' ' + styles['modal__button--secondary']}
              onClick={onClose}
            >
              Отмена
            </button>
          </div>

          <button
            type="button"
            className={styles['modal__toggle']}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Нет аккаунта? Зарегистрируйтесь' : 'Уже есть аккаунт? Войдите'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;