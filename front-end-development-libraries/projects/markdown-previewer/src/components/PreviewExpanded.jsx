import { LiaFreeCodeCamp } from "react-icons/lia";
import { FaCompressAlt } from "react-icons/fa";
import  "./PreviewExpanded.css";

export default function PreviewExpanded({changePreview, text, marked, DOMPurify}) {
  return (
    <div className="preview-box">
      <div className="preview-header">
        <span className="span-header">
          <LiaFreeCodeCamp className="fcc-icon"/>
          <h4>Preview</h4>
        </span>
        <span className="span-header">
          <button onClick={changePreview}><FaCompressAlt /></button>
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
