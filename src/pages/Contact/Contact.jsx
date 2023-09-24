import "./Contact.css";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>You can reach me via the following channels:</p>
      <p>
        Email:{" "}
        <div>
          <a href="mailto:pritamrauniyar.np@gmail.com">
            pritamrauniyar.np@gmail.com
          </a>
        </div>
        <div>
          <a href="mailto:contact@pritamrauniyar.com.np">
            contact@pritamrauniyar.com.np
          </a>
        </div>
      </p>
      <p>
        Phone:
        <div>
          <a href="tel:+916201413304">+91-6201413304</a>
          <a href="tel:+9779800877665">+977-9800877665</a>
        </div>
      </p>
      {/* <p>
        Address: 235 Mathru, 5thA Cross Road, Jakkansandra, Bangalore - 560034,
        India
      </p> */}

      <p>Social Links:</p>
      <div className="social-links">
        <a
          href="https://facebook.com/pritamrauniyar.np/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size="2em" />
        </a>
        <a
          href="https://www.linkedin.com/in/pritamrauniyar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size="2em" />
        </a>
        <a
          href="https://www.instagram.com/pritamrauniyar.np/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size="2em" />
        </a>
        <a
          href="https://wa.me/916201413304"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size="2em" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
