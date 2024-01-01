export default function Previewer({ editorText, marked, DOMPurify }) {
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(marked(editorText, { breaks: true })),
      }}
    ></div>
  );
}
