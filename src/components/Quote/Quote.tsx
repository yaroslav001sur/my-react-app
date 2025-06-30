import styles from './Quote.module.css';

const Quote = () => {
  return (
    <section className={styles.quote}>
      <div className={styles['quote__content']}>
        <img src="/img/mask.png" alt="Цитата" className={styles['quote__icon']} />
        <div className={styles['quote__author']}>
          <img src="/img/avatar.png" alt="Zhao Cui" className={styles['quote__author-photo']} />
          <blockquote className={styles['quote__text']}>
            <p>Обучение программированию требует практики.</p>
            <p>Мы делаем процесс простым и понятным.</p>
          </blockquote>
          <p className={styles['quote__author-name']}>Александр Петров</p>
          <span className={styles['quote__author-title']}>Основатель платформы</span>
        </div>
      </div>
    </section>
  );
};

export default Quote;