import { LiaFreeCodeCamp } from "react-icons/lia";
import { FaCompressAlt } from "react-icons/fa";
import "./EditorExpanded.css";

export default function EditorExpanded({ changeEditor, text, handleChange }) {
  return (
    <div className="editor-box">
      <div className="editor-header">
        <span className="span-header">
          <LiaFreeCodeCamp className="fcc-icon"/>
          <h4>Editor</h4>
        </span>
        <span className="span-header">
          <button onClick={changeEditor}><FaCompressAlt /></button>
        </span>
      </div>
      <textarea id="editor" value={text} onChange={handleChange}></textarea>
    </div>
  );
}
