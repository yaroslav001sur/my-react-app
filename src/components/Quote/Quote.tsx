import styles from './Quote.module.css';

const Quote = () => {
  return (
    <section className={styles.quote}>
      <div className={styles['quote__content']}>
        <img src="/img/mask.png" alt="Quote Icon" className={styles['quote__icon']} />
        <div className={styles['quote__author']}>
          <img src="/img/avatar.png" alt="Zhao Cui" className={styles['quote__author-photo']} />
          <blockquote className={styles['quote__text']}>
            <p>Creating an Online Presence is Hard.</p>
            <p>Jobly Makes it Easy for Recruiters to See You.</p>
          </blockquote>
          <p className={styles['quote__author-name']}>Zhao Cui</p>
          <span className={styles['quote__author-title']}>Founder at Jobly.co</span>
        </div>
      </div>
    </section>
  );
};

export default Quote;