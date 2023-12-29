import { LiaFreeCodeCamp } from "react-icons/lia";
import { FaExpandArrowsAlt, FaCompressAlt } from "react-icons/fa";
import  "./DefaultState.css";

export default function DefaultState({ changeEditor, changePreview, text, handleChange, marked, DOMPurify }) {
  return (
    <>
    <div className="editor-box">
      <div className="editor-header">
        <span className="span-header">
          <LiaFreeCodeCamp className="fcc-icon" />
          <h4>Editor</h4>
        </span>
        <span className="span-header">
          <button onClick={changeEditor}><FaExpandArrowsAlt /></button>
        </span>
      </div>
      <textarea id="editor" value={text} onChange={handleChange}></textarea>
    </div>

    <div className="preview-box">
      <div className="preview-header">
        <span className="span-header">
        <LiaFreeCodeCamp className="fcc-icon"/>
          <h4>Preview</h4>
        </span>
        <span className="span-header">
          <button><FaExpandArrowsAlt onClick={changePreview}/></button>
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
