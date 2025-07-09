import React, { useEffect, useRef } from 'react';

declare const Swiper: any;
const Slider = () => {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    const instance = new Swiper(swiperRef.current, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    return () => {
      if (instance && instance.destroy) {
        instance.destroy();
      }
    };
  }, []);

  return (
    <section className="slider">
      <h3 className="slider__title">Наши курсы</h3>
      <p className="slider__text">
        Выбирайте из десятков курсов по веб-разработке, мобильным приложениям, машинному обучению и другим направлениям.
      </p>

      <div className="swiper-wrapper-container">


        <div className="swiper" ref={swiperRef}>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="/img/info-image.png" alt="Image 1" />
            </div>
            <div className="swiper-slide">
              <img src="/img/hero-image.png" alt="Image 2" />
            </div>
            <div className="swiper-slide">
              <img src="/img/info-image.png" alt="Image 1" />
            </div>
            <div className="swiper-slide">
              <img src="/img/hero-image.png" alt="Image 2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;