import styles from './Info.module.css';

const Info = () => {
  return (
    <section className={styles.info}>
      <h2 className={styles['info__title']}>Что вы получите?</h2>
      <div className={styles['info__card-display']}></div>
      <div className={styles['info__features-slider']}>
        <div className={styles['info__feature']}>
          <h3 className={styles['info__feature-title']}>Курс по HTML/CSS</h3>
          <p className={styles['info__feature-text']}>
            Освойте основы верстки сайтов за 2 месяца. Проекты, тесты и обратная связь от менторов.
          </p>
        </div>
        <div className={styles['info__feature']}>
          <h3 className={styles['info__feature-title']}>JavaScript и React</h3>
          <p className={styles['info__feature-text']}>
           Научитесь создавать интерактивные приложения. Работа с API, Redux, проекты.
          </p>
        </div>
        <div className={styles['info__feature']}>
          <h3 className={styles['info__feature-title']}>Backend с Node.js</h3>
          <p className={styles['info__feature-text']}>
            Разработка серверных приложений, работа с базами данных, REST API, Docker.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;