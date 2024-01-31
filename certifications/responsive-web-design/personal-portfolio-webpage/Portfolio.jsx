import "./styles.css";
import { FaFacebook, FaGithub, FaLinkedin, FaAt } from "react-icons/fa";

export function Portfolio() {
  return (
    <div className="portfolio-container">
      <header>
        <nav id="navbar">
          <ul className="nav-list">
            <li>
              <a href="#welcome-section">About</a>
            </li>
            <li>
              <a href="#projects">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="welcome-section">
        <h1>Hey I am Zac</h1>
        <h2>a web developer</h2>
      </section>
      <section id="projects">
        <div className="project-tile">
          <h2>These are some of my projects</h2>
          <div className="tiles">
            <a
              href="https://zac-horton-freecodecamp-projects.netlify.app/survey-form"
              target="_blank"
            >
              <img src="https://raw.githubusercontent.com/ZacHorton/freeCodeCamp-projects/master/certifications/responsive-web-design/personal-portfolio-webpage/survey-form.png" />
            </a>
            <a
              href="https://zac-horton-freecodecamp-projects.netlify.app/product-landing-page"
              target="_blank"
            >
              <img src="https://raw.githubusercontent.com/ZacHorton/freeCodeCamp-projects/master/certifications/responsive-web-design/personal-portfolio-webpage/product-landing-page.png" />
            </a>
            <a
              href="https://zac-horton-freecodecamp-projects.netlify.app/random-quote-machine"
              target="_blank"
            >
              <img src="https://raw.githubusercontent.com/ZacHorton/freeCodeCamp-projects/master/certifications/responsive-web-design/personal-portfolio-webpage/random-quote-machine.png" />
            </a>
            <a
              href="https://zac-horton-freecodecamp-projects.netlify.app/markdown-previewer"
              target="_blank"
            >
              <img src="https://raw.githubusercontent.com/ZacHorton/freeCodeCamp-projects/master/certifications/responsive-web-design/personal-portfolio-webpage/markdown-previewer.png" />
            </a>
            <a
              href="https://zac-horton-freecodecamp-projects.netlify.app/drum-machine"
              target="_blank"
            >
              <img src="https://raw.githubusercontent.com/ZacHorton/freeCodeCamp-projects/master/certifications/responsive-web-design/personal-portfolio-webpage/drum-machine.png" />
            </a>
            <a
              href="https://zac-horton-freecodecamp-projects.netlify.app/javascript-calculator"
              target="_blank"
            >
              <img src="https://raw.githubusercontent.com/ZacHorton/freeCodeCamp-projects/master/certifications/responsive-web-design/personal-portfolio-webpage/javaScript-calculator.png" />
            </a>
          </div>
        </div>
      </section>
      <section id="contact">
        <h1>Let's Work Together</h1>
        <h3>How do you take your coffee?</h3>
        <div className="contact-links">
          <a
            href="https://www.facebook.com/groups/freecodecampwoodstockgeorgia"
            target="_blank"
            className="contact-details"
          >
            <FaFacebook /> Facebook
          </a>
          <a
            id="profile-link"
            href="https://github.com/ZacHorton"
            target="_blank"
            className="contact-details"
          >
            <FaGithub /> GitHub
          </a>
          <a
            id="profile-link"
            href="https://www.linkedin.com/in/zac-horton/"
            target="_blank"
            className="contact-details"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a href="mailto:fullstackzac@gmail.com" className="contact-details">
            <FaAt /> Send a mail
          </a>
        </div>
      </section>
    </div>
  );
}
