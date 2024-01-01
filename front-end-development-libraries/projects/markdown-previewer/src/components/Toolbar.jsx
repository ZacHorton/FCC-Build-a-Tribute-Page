import { LiaFreeCodeCamp } from "react-icons/lia";
import { FaExpandArrowsAlt, FaCompressAlt } from "react-icons/fa";

export default function NewToolbar({
  heading,
  editorButtonClicked,
  onEditorClick,
  previewerButtonClicked,
  onPreviewerClick,
}) {
  if (heading === "Editor") {
    return (
      <div className="toolbar-flex-container">
        <span className="toolbar-flex-span-left">
          <LiaFreeCodeCamp className="toolbar-fcc-icon" />
          <h4 className="toolbar-h4">Editor</h4>
        </span>
        <button onClick={onEditorClick}>
          {editorButtonClicked ? (
            <FaCompressAlt className="toolbar-compress-icon" />
          ) : (
            <FaExpandArrowsAlt className="toolbar-expand-icon" />
          )}
        </button>
      </div>
    );
  } else if (heading === "Previewer") {
    return (
      <div className="toolbar-flex-container">
        <span className="toolbar-flex-span-left">
          <LiaFreeCodeCamp className="toolbar-fcc-icon" />
          <h4 className="toolbar-h4">Previewer</h4>
        </span>
        <button onClick={onPreviewerClick}>
          {previewerButtonClicked ? (
            <FaCompressAlt className="toolbar-compress-icon" />
          ) : (
            <FaExpandArrowsAlt className="toolbar-expand-icon" />
          )}
        </button>
      </div>
    );
  }
}
