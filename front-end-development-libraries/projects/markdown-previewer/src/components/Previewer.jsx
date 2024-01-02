export default function Previewer({ previewerButtonClicked, editorText, marked, DOMPurify }) {
  if (previewerButtonClicked) {
    return (
      <div
      id="preview-expanded"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(marked(editorText, { breaks: true })),
      }}
    ></div>
    );
  } else {
    return (
      <div
      id="preview"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(marked(editorText, { breaks: true })),
      }}
    ></div>
    );
  }
}
