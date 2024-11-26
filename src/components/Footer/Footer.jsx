import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="content">
          <h3>Pritam Rauniyar</h3>
        </div>
        <div>
          <p>
            www.pritamrauniyar.com.np | Copyright © 2024 - 2025 | All rights reserved
          </p>
        </div>
        <div className="social-links">
          <a
            href="https://github.com/pritamrauniyar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/pritamrauniyar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:pritamrauniyar.np@gmail.con">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
