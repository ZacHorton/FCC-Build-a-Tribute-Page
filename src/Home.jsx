import { Link } from "react-router-dom";
import "./styles.css";

export function Home() {
  return (
    <div className="homeContainer">
      <nav>
        <a href="https://www.freeCodeCamp.org">freeCodeCamp.org</a>
        <a href="https://www.freecodecamp.org/certification/zachorton/responsive-web-design">Responsive Web Design Developer Certification</a>
        <ol>
          <li><Link to="/survey-form">Survey Form</Link></li>
          <li><Link to="/tribute-page">Tribute Page</Link></li>
          <li><Link to="/technical-documentation-page">Technical Documentation Page</Link></li>
          <li><Link to="/product-landing-page">Product Landing Page</Link></li>
          <li><Link to="/personal-portfolio-webpage">Personal Portfolio Webpage</Link></li>
        </ol>
        <a href="https://www.freecodecamp.org/certification/zachorton/javascript-algorithms-and-data-structures">JavaScript Algorithms and Data Structures Developer Certification</a>
        <ol>
          <li><a href="https://github.com/ZacHorton/freeCodeCamp-projects/blob/master/certifications/javaScript-algorithms-and-data-structures/palindrome-checker.js">Palindrome Checker</a></li>
          <li><a href="https://github.com/ZacHorton/freeCodeCamp-projects/blob/master/certifications/javaScript-algorithms-and-data-structures/roman-numeral-converter.js">Roman Numeral Converter</a></li>
          <li><a href="https://github.com/ZacHorton/freeCodeCamp-projects/blob/master/certifications/javaScript-algorithms-and-data-structures/caesars-cipher.js">Caesars Cipher</a></li>
          <li><a href="https://github.com/ZacHorton/freeCodeCamp-projects/blob/master/certifications/javaScript-algorithms-and-data-structures/telephone-number-validator.js">Telephone Number Validator</a></li>
          <li><a href="https://github.com/ZacHorton/freeCodeCamp-projects/blob/master/certifications/javaScript-algorithms-and-data-structures/cash-register.js">Cash Register</a></li>
        </ol>
          <a href="https://www.freecodecamp.org/certification/zachorton/front-end-development-libraries">Front End Development Libraries Developer Certification</a>
        <ol>
          <li><Link to="/random-quote-machine">Random Quote Machine</Link></li>
          <li><Link to="/markdown-previewer">Markdown Previewer</Link></li>
          <li><Link to="/drum-machine">Drum Machine</Link></li>
          <li><Link to="/javascript-calculator">JavaScript Calculator</Link></li>
          <li><Link to="/25+5-clock">25 + 5 Clock</Link></li>
        </ol>
        <a>Data Visualization Developer Certification</a>
          <ol>
            <li><Link to="/bar-chart">Bar Chart</Link></li>
            <li><Link to="/scatterplot-graph">Scatterplot Graph</Link></li>
            <li><Link to="/heat-map">Heat Map</Link></li>
            <li><Link to="/choropleth-map">Choropleth Map</Link></li>
            <li><Link to="/treemap-diagram">Treemap Diagram</Link></li>
          </ol> 
      </nav>
    </div>
  );
}