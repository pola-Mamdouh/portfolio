import LetterAnimation from '../UI/LetterAnimation';
import './home.css'
const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="content ">
          <div className="home-info">
            <LetterAnimation />
            <p className="description">
              I am a Front-End Developer with experience in HTML, CSS,
              JavaScript, Bootstrap, and React.js. I specialize in building
              responsive and user-friendly web applications, ensuring a seamless
              user experience. Passionate about modern web technologies and
              continuously improving my skills.
            </p>
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
                <a href="https://github.com/pola-Mamdouh">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/paula-mamdoh-15382125a/">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="home-profile">
            <img src="/" alt="my-profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
