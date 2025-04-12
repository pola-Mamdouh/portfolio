import { Typewriter } from "react-simple-typewriter";

const LetterAnimation = () => {
  return (
    <h1>
      I'm a {" "}
      <span style={{ color: "salmon", fontWeight: "bold" }}>
        <Typewriter
          words={["Front-end Developer", "React Developer"]}
          loop={1.5}
          cursor
          cursorStyle=""
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h1>
  );
};

export default LetterAnimation;
