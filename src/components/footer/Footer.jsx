import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="content">
          <p className="copyright">&copy; Made by Pola Mamdouh♥</p>
          <ul className="media-icon">
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
