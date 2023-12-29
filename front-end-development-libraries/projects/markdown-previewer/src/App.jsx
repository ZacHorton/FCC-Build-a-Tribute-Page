import { useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import "./App.css";
import EditorExpanded from "./components/EditorExpanded.jsx";
import PreviewExpanded from "./components/PreviewExpanded.jsx";
import DefaultState from "./components/DefaultState.jsx";

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

  let display;
  const [editorExpanded, setEditor] = useState(false);
  const [previewExpanded, setPreview] = useState(false);
  if (editorExpanded && !previewExpanded) {
    display = <EditorExpanded 
      text={text}
      handleChange={handleChange}
      changeEditor={changeEditor}
    />
  }
  else if (previewExpanded && !editorExpanded) {
    display = <PreviewExpanded 
      text={text}
      changePreview={changePreview}
      marked={marked}
      DOMPurify={DOMPurify}
    />
  }
  else {
    display = <DefaultState
      text={text}
      handleChange={handleChange}
      changeEditor={changeEditor}
      changePreview={changePreview}
      marked={marked}
      DOMPurify={DOMPurify}
    />
  }

  function changeEditor() {
    setEditor(!editorExpanded);
  }
  function changePreview() {
    setPreview(!previewExpanded);
  }
  return (
    <>
    {display}
    </>
  );
}