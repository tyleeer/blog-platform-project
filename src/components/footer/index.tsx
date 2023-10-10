import { footers } from "../../data";
import "./index.scss";

const Footer = () => {
  footers;
  return (
    <footer className="footer">
      <div className="footer__title">
        <h2>10x your growth with Blogpost</h2>
        <p>Join over 40,000+ designers already growing with Blogpost</p>
      </div>
      <div className="footer__nav">
        {footers.map((ele, index) => {
          return (
            <div key={index} className="footer__nav--list">
              <p>{ele.title}</p>
              {ele.list.map((ele, index) => {
                return (
                  <a href="#" key={index}>
                    {ele}
                  </a>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="footer__credit">
        <p>© 2077 Blogpost. All rights reserved.</p>
        <div className="footer__credit--list">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>
      </div>
      <button type="button">Create account</button>
    </footer>
  );
};

export default Footer;
