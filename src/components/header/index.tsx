import "./index.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <span>Blogpost</span>
      </div>
      <nav className="header__nav">
        <a className="header__nav--list">Home</a>
        <a className="header__nav--list">About us</a>
        <a className="header__nav--list">Products</a>
        <a className="header__nav--list">Pricing</a>
        <a className="header__nav--list">Blog</a>
      </nav>
      <div className="header__btn">
        <button type="button">Log in</button>
        <button type="button">Sign up</button>
      </div>
    </header>
  );
};

export default Header;
