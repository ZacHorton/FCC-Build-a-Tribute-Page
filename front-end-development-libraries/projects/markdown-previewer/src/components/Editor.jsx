import  "./Editor.css";

export default function Editor({ fCCIcon, expandIcon, compressIcon, text, handleChange }) {
  return (
    <div className="editor-box">
      <div className="editor-header">
        <span className="span-header">
          {fCCIcon}
          <h4>Editor</h4>
        </span>
        <span className="span-header">
          <button>{expandIcon}</button>
          <button>{compressIcon}</button>
        </span>
      </div>
      <textarea id="editor" value={text} onChange={handleChange}></textarea>
    </div>
  );
}
