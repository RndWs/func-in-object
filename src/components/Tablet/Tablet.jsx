
import { useState } from "react";
import ModeRenderer from "./renderer/ModeRenderer";

import styles from "./TabletStyles.module.css";

function Tablet({ 
  item, 
  mode, 
  onSave, 
  onEditClick, 
  onDetailClick, 
  onBackClick 
}) {
  const [formData, setFormData] = useState(
    item || {
      type: "tablet",
      name: "",
      screenSize: "",
      batteryLife: "",
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
    <div className={styles.tabletCard}>
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

  // return (
  //   <div className={styles.tabletCard}>
  //     <>
  //       <h2 className={styles.title}>
  //         {mode === "view" || mode === "detail" ? (
  //           item.name
  //         ) : (
  //           <label>
  //             Name:{" "}
  //             <input
  //               name="name"
  //               value={formData.name || ""}
  //               onChange={handleInputChange}
  //               placeholder="Name"
  //             />
  //           </label>
  //         )}
  //       </h2>
  //       <p className={styles.screenSize}>
  //         {mode === "view" || mode === "detail" ? (
  //           item.screenSize
  //         ) : (
  //           <label>
  //             Screen Size:{" "}
  //             <input
  //               name="screenSize"
  //               value={formData.screenSize || ""}
  //               onChange={handleInputChange}
  //               placeholder="Screen Size"
  //             />
  //           </label>
  //         )}
  //       </p>
  //       <p className={styles.batteryLife}>
  //         {mode === "view" || mode === "detail" ? (
  //           item.batteryLife
  //         ) : (
  //           <label>
  //             Battery Life:{" "}
  //             <input
  //               name="batteryLife"
  //               value={formData.batteryLife || ""}
  //               onChange={handleInputChange}
  //               placeholder="Battery Life"
  //             />
  //           </label>
  //         )}
  //       </p>
  //       <p>
  //         {mode === "view" || mode === "detail" ? (
  //           <> Price: $ {Number(item.price).toFixed(2)}</>
  //         ) : (
  //           <label>
  //             Price:{" "}
  //             <input
  //               name="price"
  //               type="number"
  //               value={formData.price || ""}
  //               onChange={handleInputChange}
  //               placeholder="Price"
  //             />
  //           </label>
  //         )}
  //       </p>
  //       <p>
  //         {mode === "view" || mode === "detail" ? (
  //           item.inStock ? (
  //             "Available"
  //           ) : (
  //             "Out of Stock"
  //           )
  //         ) : (
  //           <label>
  //             In Stock:{" "}
  //             <input
  //               name="inStock"
  //               type="checkbox"
  //               checked={formData.inStock || false}
  //               onChange={handleInputChange}
  //             />
  //           </label>
  //         )}
  //       </p>
  //       <div className={styles.buttonSection}>
  //         <p>
  //           {mode === "view" && <button onClick={onEditClick}>Edit</button>}
  //         </p>
  //         <p>
  //           {mode === "view" && <button onClick={onDetailClick}>Detail</button>}
  //         </p>
  //         <p>
  //           {mode === "edit" && (
  //             <button onClick={handleSave}>Save Changes</button>
  //           )}
  //         </p>
  //         <p>{mode === "add" && <button onClick={handleSave}>Save</button>}</p>
  //         <p>
  //           {(mode === "edit" || mode === "add" || mode === "detail") && (
  //             <button onClick={onBackClick}>Back</button>
  //           )}
  //         </p>
  //       </div>
  //     </>
  //   </div>
  // );
}

export default Tablet;