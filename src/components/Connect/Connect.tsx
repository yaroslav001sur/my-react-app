import styles from './Connect.module.css';

const Connect = () => {
  return (
    <section className={styles.connect}>
      <div className={styles['connect__content']}>
        <img src="/img/connect-image.png" alt="Студент и преподаватель" className={styles['connect__image']} />
        <div className={styles['connect__text']}>
          <h3 className={styles['connect__title']}>Обучение с преподавателем</h3>
          <p className={styles['connect__description']}>
            Получите доступ к сообществу студентов и преподавателей. Задавайте вопросы, обсуждайте проекты и получайте обратную связь.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Connect;