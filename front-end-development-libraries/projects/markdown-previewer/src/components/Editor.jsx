export default function Editor({
  editorText,
  editorButtonClicked,
  handleEditorChange,
}) {
  if (editorButtonClicked) {
    return (
      <textarea
        id="editor-expanded"
        value={editorText}
        onChange={handleEditorChange}
      ></textarea>
    );
  } else {
    return (
      <textarea
        id="editor"
        value={editorText}
        onChange={handleEditorChange}
      ></textarea>
    );
  }
}
