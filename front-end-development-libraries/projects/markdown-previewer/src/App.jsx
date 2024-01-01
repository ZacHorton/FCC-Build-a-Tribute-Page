import { useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import "./App.css";
import Toolbar from "./components/Toolbar.jsx";
import Editor from "./components/Editor.jsx";
import Previewer from "./components/Previewer.jsx";

export default function App() {
  const [editorText, setEditorText] = useState(
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

  function handleEditorChange(event) {
    setEditorText(event.target.value);
  }

  const [editorButtonClicked, setEditorClicked] = useState(false);
  const [previewerButtonClicked, setPreviewerClicked] = useState(false);

  const handleEditorButtonClick = () => {
    setEditorClicked((editorButtonClicked) => !editorButtonClicked);
  };

  const handlePreviewerButtonClick = () => {
    setPreviewerClicked((previewerButtonClicked) => !previewerButtonClicked);
  };

  return (
    <>
      {editorButtonClicked ? (
        <>
          <Toolbar
            heading="Editor"
            editorButtonClicked={editorButtonClicked}
            onEditorClick={handleEditorButtonClick}
          />
          <Editor
            editorText={editorText}
            editorButtonClicked={editorButtonClicked}
            handleEditorChange={handleEditorChange}
          />
        </>
      ) : previewerButtonClicked ? (
        <>
          <Toolbar
            heading="Previewer"
            previewerButtonClicked={previewerButtonClicked}
            onPreviewerClick={handlePreviewerButtonClick}
          />
          <Previewer
            editorText={editorText}
            marked={marked}
            DOMPurify={DOMPurify}
          />
        </>
      ) : (
        <>
          <Toolbar
            heading="Editor"
            editorButtonClicked={editorButtonClicked}
            onEditorClick={handleEditorButtonClick}
          />
          <Editor
            editorText={editorText}
            editorButtonClicked={editorButtonClicked}
            handleEditorChange={handleEditorChange}
          />
          <Toolbar
            heading="Previewer"
            previewerButtonClicked={previewerButtonClicked}
            onPreviewerClick={handlePreviewerButtonClick}
          />
          <Previewer
            editorText={editorText}
            marked={marked}
            DOMPurify={DOMPurify}
          />
        </>
      )}
    </>
  );
}
