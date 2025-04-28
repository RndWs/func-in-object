
const itemSchemas = {
  laptop: [
    { name: "name", type: "text", label: "Name" },
    { name: "description", type: "textarea", label: "Description" },
    { name: "price", type: "number", label: "Price" },
    { name: "inStock", type: "checkbox", label: "In Stock" }
  ],
  smartphone: [
    { name: "name", type: "text", label: "Name" },
    { name: "brand", type: "text", label: "Brand" },
    { name: "price", type: "number", label: "Price" },
    { name: "batteryLife", type: "number", label: "Battery Life (hours)" },
    { name: "inStock", type: "checkbox", label: "In Stock" }
  ]
};




function ModeRenderer({
  mode,
  schema,
  formData,
  onChange,
  onSave,
  onBackClick,
}) {
  const modeComponents = {
    view: ViewMode,
    edit: EditMode,
    add: EditMode,
    detail: DetailMode,
  };

  const ModeComponent = modeComponents[mode];

  return ModeComponent ? (
    <ModeComponent
      schema={schema}
      formData={formData}
      onChange={onChange}
      onSave={onSave}
      onBackClick={onBackClick}
    />
  ) : (
    <p>Unknown mode: {mode}</p>
  );
}






function ViewMode({ schema, formData }) {
  return (
    <div>
      {schema.map((field) => (
        <p key={field.name}>
          <strong>{field.label}:</strong>{" "}
          {field.type === "checkbox"
            ? formData[field.name]
              ? "Yes"
              : "No"
            : formData[field.name]}
        </p>
      ))}
    </div>
  );
}







function ItemComponent({ itemType, item, mode, onSave, onBackClick }) {
  const [formData, setFormData] = useState(item || {});
  const schema = itemSchemas[itemType];

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <ModeRenderer
        mode={mode}
        schema={schema}
        formData={formData}
        onChange={handleInputChange}
        onSave={onSave}
        onBackClick={onBackClick}
      />
    </div>
  );
}