
import React from "react";
import ViewMode from "../modes/ViewMode";
import EditMode from "../modes/EditMode";
import DetailMode from "../modes/DetailMode"; // Example for a new mode

function ModeRenderer({
  mode,
  item,
  formData,
  onChange,
  onSave,
  onEditClick,
  onDetailClick,
  onBackClick,
}) {
  const modeComponents = {
    view: ViewMode,
    edit: EditMode,
    add: EditMode, // Reuse EditMode for "add"
    detail: DetailMode, // New mode example
  };

  const ModeComponent = modeComponents[mode];

  return ModeComponent ? (
    <ModeComponent
      mode={mode}
      item={item}
      formData={formData}
      onChange={onChange}
      onSave={onSave}
      onEditClick={onEditClick}
      onDetailClick={onDetailClick}
      onBackClick={onBackClick}
    />
  ) : (
    <p>Unknown mode: {mode}</p>
  );
}

export default ModeRenderer;
