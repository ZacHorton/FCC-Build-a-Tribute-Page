import { useState } from "react";
import quotes from "./quotes.json";
import { FaTwitter, FaTumblr, FaQuoteLeft } from "react-icons/fa";
import "./styles.css";

const transition = "all 1s";

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function randomColor() {
  var colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
}

export function RandomQuoteMachine() {
  const [quote, setQuote] = useState(randomQuote());
  const [color, setColor] = useState(randomColor());

  function newQuote() {
    setQuote(randomQuote());
    setColor(randomColor());
  }

  return (
      <div
        className="RQMContainer"
        style={{ backgroundColor: color, color, transition }}
      >
        <div id="wrapper">
          <div id="quote-box">
            <div id="text">
              <h1>
                <FaQuoteLeft /> 
                {quote.quote}
              </h1>
            </div>
            <div id="author">
              <h2>- {quote.author}</h2>
            </div>
            <div className="buttons">
              <a
                id="tweet-quote"
                href="https://www.twitter.com/intent/tweet"
                target="_blank"
                style={{ backgroundColor: color, transition }}
              >
                <FaTwitter />
              </a>
              <a
                id="tumblr-quote"
                href="https://www.tumblr.com/"
                target="_blank"
                style={{ backgroundColor: color, transition }}
              >
                <FaTumblr />
              </a>
              <button
                id="new-quote"
                onClick={newQuote}
                style={{ backgroundColor: color, transition }}
              >
                New Quote
              </button>
            </div>
          </div>
          <p id="by-name">
            <a href="https://github.com/ZacHorton" target="_blank">
              By Zac Horton
            </a>
          </p>
        </div>
      </div>
  );
}
