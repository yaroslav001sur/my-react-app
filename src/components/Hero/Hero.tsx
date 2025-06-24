import './Hero.module.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Candidates with Creative & Engineering Backgrounds</h1>
        <p className="hero__text">This is the place to show yourself and land entry level jobs at cutting-edge companies. Launch your career here.</p>
        <a href="#" className="hero__cta hero__cta--can">Join Now</a>
        <p className="hero__text">Looking for candidates? <a href="#" className="hero__link">Hire now</a></p>
        <div className="hero__gradient">
          <img className="hero__image" alt="Hero Image" src="/img/hero-image.png" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;