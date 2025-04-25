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
              <a href="https://wa.me/+2001140385268" target='_blank'>
                    <i class="fa-brands fa-whatsapp"></i>
                  </a>
              </li>
              <li>
                <a href="https://www.instagram.com/paula_mamdouh_?igsh=MW15bm1xODRqd29xYQ==" target='_blank'>
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/pola-Mamdouh" target='_blank'>
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/paula-mamdoh-15382125a/" target='_blank'>
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="home-profile flex-center">
            <div className="frame"></div>
            <img src="/images/my_profile.png" loading="eager" alt="my-profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
