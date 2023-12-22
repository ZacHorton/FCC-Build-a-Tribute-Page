import { useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { LiaFreeCodeCamp } from "react-icons/lia";
import { FaExpandArrowsAlt, FaCompressAlt } from "react-icons/fa";

import "./App.css";

function App() {
  const [text, setText] = useState(
    `  # H1 heading
  ## H2 heading
  ### H3 heading
  **Bold text**

  *Italicized text*
  > This is a blockquote

  Ordered list:
  1. First item
  2. Second item
  3. Third item

  Unordered list:
  - First item
  - Second item
  - Third item

  Inline code:
  \`<div>This is a div tag<div>\`

  Fenced code block:
  \`\`\`
  function sum(a, b) {
    return a + b;
  }
  \`\`\`

  Build a Markdown Previewer:
  [Link](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)
  
  Markdown symbol:
  ![Markdown symbol](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)
  `
  );
  return (
    <>
      <div class="editor-box">
        <div class="editor-header">
          <span>
            <LiaFreeCodeCamp className="fcc-icons" />
            <h4>Editor</h4>
          </span>
          <span>
            <FaExpandArrowsAlt className="expand-icons" />
            <FaCompressAlt className="compress-icons" />
          </span>
        </div>
        <textarea
          id="editor"
          onChange={(event) => {
            setText(event.target.value);
          }}
          value={text}
        ></textarea>
      </div>

      <div class="preview-box">
        <div class="preview-header">
          <span>
            <LiaFreeCodeCamp className="fcc-icons" />
            <h4>Preview</h4>
          </span>
          <span>
            <FaExpandArrowsAlt className="expand-icons" />
            <FaCompressAlt className="compress-icons" />
          </span>
        </div>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(marked(text, { breaks: true })),
          }}
        ></div>
      </div>
    </>
  );
}

export default App;
