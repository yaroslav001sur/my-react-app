import './Footer.module.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <img className="footer__logo" alt="Jobly Logo" src="/img/logo2.png" />
          <p className="footer__text">We support a pool of diverse young creatives and engineers.</p>
          <p className="footer__text">© 2023 Jobly.co Copyright and All rights reserved.</p>
        </div>
        <div className="footer__right">
          <a href="#" className="footer__link">Terms and Conditions</a>
          <a href="#" className="footer__link">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;