
import React, { useState } from "react";
import {componentList} from "../../sharedComponents/componentList"; // Import list

function AddItemForm({ onAddItem }) {
  const [selectedType, setSelectedType] = useState(componentList[0].type); // Default to first type
  const [formData, setFormData] = useState({});

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    setFormData({});
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: Date.now(), type: selectedType, ...formData };
    onAddItem(newItem);
  };

  const [isEditingAllowed] = useState(false)

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select Type:
        <select value={selectedType} onChange={handleTypeChange}>
          {componentList.map((config) => (
            <option key={config.type} value={config.type}>
              {config.type}
            </option>
          ))}
        </select>
      </label>
      <br />
      {componentList
        .find((config) => config.type === selectedType)
        // .fields.map((field) => (
        //   <div key={field}>
        //     <label>
        //       {field.charAt(0).toUpperCase() + field.slice(1)}:
        //       <input
        //         type="text"
        //         name={field}
        //         value={formData[field] || ""}
        //         onChange={handleFieldChange}
        //       />
        //     </label>
        //     <br />
        //   </div>
        // ))
        .component(isEditingAllowed )
        }
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItemForm;