
import { useState, useEffect } from "react";
import ModeRenderer from "./renderer/ModeRenderer";

import styles from "./SmartphoneStyles.module.css";

function Smartphone({
  item,
  mode,
  onSave,
  onEditClick,
  onDetailClick,
  onBackClick,
}) {
  const [formData, setFormData] = useState(
    item || {
      type: "smartphone",
      name: "",
      manufacturer: "",
      features: [],
      price: "",
      inStock: false,
    }
  );

  const handleInputChange = (e, featureIndex = null, action = "update") => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      if (name === "features") {
        if (action === "delete" && featureIndex !== null) {
          // Delete a specific feature
          return {
            ...prevData,
            features: prevData.features.filter(
              (_, index) => index !== featureIndex
            ),
          };
        } else if (action === "add") {
          // Add a new feature
          return {
            ...prevData,
            features: [...prevData.features, value],
          };
        } else if (action === "update" && featureIndex !== null) {
          // Update a specific feature
          return {
            ...prevData,
            features: prevData.features.map((feature, index) =>
              index === featureIndex ? value : feature
            ),
          };
        }
      } else {
        // Update any other field
        return {
          ...prevData,
          [name]: name === "inStock" ? e.target.checked : value,
        };
      }
    });
  };

  useEffect;() => {
    console.log(`formData:->`);
    console.log(formData);
  }, [formData];


  return (
    <div className={styles.smartphoneCard}>
      <ModeRenderer
        mode={mode}
        item={item}
        formData={formData}
        onChange={handleInputChange}
        onSave={onSave}
        onEditClick={onEditClick}
        onDetailClick={onDetailClick}
        onBackClick={onBackClick}
      />
    </div>
  );

}

export default Smartphone;