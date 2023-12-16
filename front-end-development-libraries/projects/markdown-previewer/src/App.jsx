import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  // a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
  return (
    <>
      <textarea id="editor"></textarea>
      <div id="preview">{text}</div>
    </>
  );
}

export default App;
