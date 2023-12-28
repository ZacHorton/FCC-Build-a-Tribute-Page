import  "./Preview.css";
import { marked } from "marked";
import DOMPurify from "dompurify";

export default function Preview({ fCCIcon, expandIcon, compressIcon, text}) {
  return (
    <div className="preview-box">
      <div className="preview-header">
        <span className="span-header">
          {fCCIcon}
          <h4>Preview</h4>
        </span>
        <span className="span-header">
          <button>{expandIcon}</button>
          <button>{compressIcon}</button>
        </span>
      </div>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(marked(text, { breaks: true })),
        }}
      ></div>
    </div>
  );
}
