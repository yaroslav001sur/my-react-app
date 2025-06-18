import styles from './Connect.module.css';

const Connect = () => {
  return (
    <section className={styles.connect}>
      <div className={styles['connect__content']}>
        <img src="/img/connect-image.png" alt="Connect Image" className={styles['connect__image']} />
        <div className={styles['connect__text']}>
          <h3 className={styles['connect__title']}>Connect With Recruiter</h3>
          <p className={styles['connect__description']}>
            Get instant access to a curated pool of top creative & tech talent actively seeking their next role. Find highly qualified job!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Connect;