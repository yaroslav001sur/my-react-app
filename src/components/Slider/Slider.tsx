import styles from './Slider.module.css';

const Slider = () => {
  return (
    <section className={styles.slider}>
      <h3 className={styles['slider__title']}>Connect With Slider</h3>
      <p className={styles['slider__text']}>
        Get instant access to a curated pool of top creative & tech talent actively seeking their next role. Find highly qualified job!
      </p>
      <div className={styles['swiper-wrapper-container']}>
        <div className={styles['swiper-button'] + ' ' + styles['swiper-button-prev']}></div>
        <div className={styles['swiper-container']}>
          <div className={styles.swiper}>
            <div className={styles['swiper-wrapper']}>
              <div className={styles['swiper-slide']}><img src="/img/info-image.png" alt="Image 1" /></div>
              <div className={styles['swiper-slide']}><img src="/img/hero-image.png" alt="Image 2" /></div>
            </div>
          </div>
        </div>
        <div className={styles['swiper-button'] + ' ' + styles['swiper-button-next']}></div>
      </div>
    </section>
  );
};

export default Slider;