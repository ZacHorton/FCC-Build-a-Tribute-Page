import "./styles.css";
import portfolio from "./personal-portfolio-webpage.png";
import placeholder from "./placeholder-image.png";
import product from "./product-landing-page.png";
import survey from "./survey-form.png";
import techDoc from "./technical-documentation-page.png";
import tribute from "./tribute-page.png";
import { FaFacebook, FaGithub, FaLinkedin, FaAt} from "react-icons/fa";

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
              href="https://github.com/ZacHorton/freeCodeCamp-projects/tree/master/new-responsive-web-design/certification-projects/05-survey-form"
              target="_blank"
            >
              <img src={survey} />
            </a>
            <a
              href="https://github.com/ZacHorton/freeCodeCamp-projects/tree/master/new-responsive-web-design/certification-projects/10-tribute-page"
              target="_blank"
            >
              <img src={tribute} />
            </a>
            <a
              href="https://github.com/ZacHorton/freeCodeCamp-projects/tree/master/new-responsive-web-design/certification-projects/14-technical-documentation-page"
              target="_blank"
            >
              <img src={techDoc} />
            </a>
            <a
              href="https://github.com/ZacHorton/freeCodeCamp-projects/tree/master/new-responsive-web-design/certification-projects/17-product-landing-page"
              target="_blank"
            >
              <img src={product} />
            </a>
            <a
              href="https://github.com/ZacHorton/freeCodeCamp-projects/tree/master/new-responsive-web-design/certification-projects/20-personal-portfolio-webpage"
              target="_blank"
            >
              <img src={portfolio} />
            </a>
            <a href="https://github.com/ZacHorton" target="_blank">
              <img src={placeholder} />
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
            <FaFacebook />{" "}
            Facebook
          </a>
          <a
            id="profile-link"
            href="https://github.com/ZacHorton"
            target="_blank"
            className="contact-details"
          >
            <FaGithub />{" "}
            GitHub
          </a>
          <a
            id="profile-link"
            href="https://www.linkedin.com/in/zac-horton/"
            target="_blank"
            className="contact-details"
          >
            <FaLinkedin />{" "}
            LinkedIn
          </a>
          <a href="mailto:fullstackzac@gmail.com" className="contact-details">
            <FaAt />{" "}
            Send a mail
          </a>
        </div>
      </section>
    </div>
  );
}
