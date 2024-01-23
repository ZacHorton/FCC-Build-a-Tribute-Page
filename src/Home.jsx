import { Link } from "react-router-dom";
import "./styles.css";

export function Home() {
  return (
    <div className="homeContainer">
      <nav>
        <a href="https://www.freeCodeCamp.org">freeCodeCamp.org</a>
        <a href="https://www.freecodecamp.org/certification/zachorton/responsive-web-design">Responsive Web Design Certification - Issued Apr 2023</a>
        <ol>
          <li><Link to="/survey-form">Survey Form</Link></li>
          <li><Link to="/tribute-page">Tribute Page</Link></li>
          <li><Link to="/technical-documentation-page">Technical Documentation Page</Link></li>
          <li><Link to="/product-landing-page">Product Landing Page</Link></li>
          <li><Link to="/personal-portfolio-webpage">Personal Portfolio Webpage</Link></li>
        </ol>
        <a href="https://www.freecodecamp.org/certification/zachorton/javascript-algorithms-and-data-structures">JavaScript Algorithms and Data Structures Certification - Issued Nov 2023</a>
        <ol>
          <li><Link to="/">Palindrome Checker</Link></li>
          <li><Link to="/">Roman Numeral Converter</Link></li>
          <li><Link to="/">Caesars Cipher</Link></li>
          <li><Link to="/">Telephone Number Validator</Link></li>
          <li><Link to="/">Cash Register</Link></li>
        </ol>
          <a href="">Front End Development Libraries Certification</a>
        <ol>
          <li><Link to="/random-quote-machine">Random Quote Machine</Link></li>
          <li><Link to="/markdown-previewer">Markdown Previewer</Link></li>
          <li><Link to="/drum-machine">Drum Machine</Link></li>
          <li><Link to="/javascript-calculator">JavaScript Calculator</Link></li>
          <li><Link to="/25+5-clock">25 + 5 Clock</Link></li>
        </ol>
      </nav>
    </div>
  );
}