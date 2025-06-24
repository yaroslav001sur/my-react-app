import './Header.module.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          <img className="header__logo-img" alt="Jobly Logo" src="/img/logo.svg" />
        </div>
        <nav className="header__nav">
          <a href="#" className="header__nav-link">For Recruiters</a>
          <a href="#" className="header__nav-link header__nav-link--sign-up">Sign Up</a>
          <a href="#" className="header__nav-link header__nav-link--log-in">Log in</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;