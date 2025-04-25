import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="content">
          <p className="copyright">&copy; Made by Pola Mamdouh♥</p>
          <ul className="media-icon">
            <li>
              <a href="https://wa.me/+2001140385268" target="_blank">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/paula_mamdouh_?igsh=MW15bm1xODRqd29xYQ=="
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/pola-Mamdouh" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/paula-mamdoh-15382125a"
                target="_blank"
              >
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
