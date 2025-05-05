
import { useState } from "react";
import ModeRenderer from "./renderer/ModeRenderer";

import styles from "./LaptopStyles.module.css";

function Laptop({
  item, mode,
  onSave, onEditClick, onDetailClick, onBackClick,
}) {
  const [formData, setFormData] = useState(
    item || {
      type: "laptop",
      name: "",
      description: "",
      price: "",
      inStock: false,
    }
  );
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "inStock" ? e.target.checked : value,
    });
  };

  return (
    <div className={styles.laptopCard}>
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

export default Laptop;