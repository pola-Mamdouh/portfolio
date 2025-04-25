import "./contact.css";
import { useState } from "react";
import { motion } from "framer-motion";
const Contact = () => {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = () => {
    if (status) {
      setStatus("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mblgpdbg", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setTimeout(() => {
          setStatus("SUCCESS");
          setIsSending(false);
          form.reset();
        }, 1500); // Wait for animation to complete
      } else {
        setTimeout(() => {
          setStatus("ERROR");
          setIsSending(false);
        }, 1500);
      }
    } catch (error) {
      setTimeout(() => {
        setStatus("ERROR");
        setIsSending(false);
      }, 1500);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="title">
          <span>
            <i className="fa-solid fa-envelope"></i>
          </span>
          Contact Us
        </h2>
        <p>
          Contact us for more information and get notified when I publish
          something new
        </p>
        <div className="content">
          <motion.form
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            onSubmit={handleSubmit}
          >
            <div className="email">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="message">
              <label htmlFor="message">Your Message:</label>
              <textarea
                name="message"
                id="message"
                required
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="submit-section">
              <button
                type="submit"
                className={`btn btn-success ${isSending ? "sending" : ""}`}
                disabled={isSending}
              >
                <span>{isSending ? "Sending..." : "Submit"}</span>
                <i className="fa-solid fa-paper-plane"></i>
              </button>
              {status === "SUCCESS" && (
                <p className="success-msg">
                  Thank you! Your message has been sent.
                </p>
              )}
              {status === "ERROR" && (
                <p className="error-msg">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </div>
          </motion.form>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="mail-img"
          >
            <div className="contact-info">
              <ul>
                <li>
                  <a href="https://wa.me/+2001140385268">
                    <i className="fa-brands fa-whatsapp"></i> +20 011 40385268
                  </a>
                </li>
                <li>
                  <a href="mailto:bolamamdoh259@gmail.com">
                    <i className="fa-solid fa-envelope"></i>{" "}
                    bolamamdoh259@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <img src="/images/my_profile.png" alt="Contact " />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
