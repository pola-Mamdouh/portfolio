import { motion } from "framer-motion";
import LetterAnimation from '../UI/LetterAnimation';
const HomeInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      className="home-info"
    >
      <LetterAnimation />
      <p className="description">
        I am Pola, a Front-End Developer with experience in HTML, CSS, JavaScript,
        Bootstrap, and React.js. I specialize in building responsive and
        user-friendly web applications, ensuring a seamless user experience.
        Passionate about modern web technologies and continuously improving my
        skills.
      </p>
      <ul className="media-icon">
        <li>
          <a href="https://wa.me/+2001501581399" target="_blank">
            <i className="fa-brands fa-whatsapp"></i>
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
            href="https://www.linkedin.com/in/paula-mamdoh-15382125a/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default HomeInfo;
