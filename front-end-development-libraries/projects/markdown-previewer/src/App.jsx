import { useState } from "react";
import { LiaFreeCodeCamp } from "react-icons/lia";
import { FaExpandArrowsAlt, FaCompressAlt } from "react-icons/fa";
import "./App.css";
import Editor from "./components/Editor.jsx";
import Preview from "./components/Preview.jsx";

export default function App() {
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

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <>
      <Editor
        fCCIcon={<LiaFreeCodeCamp className="fcc-icon"/>}
        expandIcon={<FaExpandArrowsAlt />}
        compressIcon={<FaCompressAlt/>}
        text={text}
        handleChange={handleChange}
      />
      <Preview 
        className="preview-component"
        fCCIcon={<LiaFreeCodeCamp className="fcc-icon"/>}
        expandIcon={<FaExpandArrowsAlt />}
        compressIcon={<FaCompressAlt/>}
        text={text}
      />
    </>
  );
}