
import { useState } from "react";
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "inStock" ? e.target.checked : value,
    });
  };

  const handleSave = () => {
    onSave(formData);
  };

  const [inputValue, setInputValue] = useState("");
  const [featuresArray, setFeaturesArray] = useState([...formData.features]);

  const handleFeaturesInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddFeaturesData = () => {
    if (inputValue.trim()) {
      setFeaturesArray([...featuresArray, inputValue]);
      setInputValue("");

      setFormData({
        ...formData,
        features: [...featuresArray, inputValue],
      });
    }
  };
  const handleDeleteFeaturesData = (index) => {
    const newData = featuresArray.filter((_, i) => i !== index);
    setFeaturesArray(newData);

    setFormData({
      ...formData,
      features: [...newData],
    });
  };

  return (
    <div className={styles.smartphoneCard}>
      <>
        <h2 className={styles.title}>
          {mode === "view" || mode === "detail" ? (
            item.name
          ) : (
            <label>
              Name:{" "}
              <input
                name="name"
                value={formData.name || ""}
                onChange={handleInputChange}
                placeholder="Name"
              />
            </label>
          )}
        </h2>
        <p className={styles.manufacturer}>
          {mode === "view" || mode === "detail" ? (
            item.manufacturer
          ) : (
            <label>
              Manufacturer:{" "}
              <textarea
                name="manufacturer"
                value={formData.manufacturer || ""}
                onChange={handleInputChange}
                placeholder="Manufacturer"
              />
            </label>
          )}
        </p>
        <ul className={styles.features}>
          {mode === "view" || mode === "detail" ? (
            item.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))
          ) : (
            <>
              <h4>add features</h4>
              <input
                type="text"
                value={inputValue}
                onChange={handleFeaturesInputChange}
                placeholder="enter feature"
                style={{ padding: "10px", width: "80%", marginBottom: "10px" }}
              />
              <button
                onClick={handleAddFeaturesData}
                style={{ padding: "10px", width: "50%" }}
              >
                Add to Features
              </button>
              {formData.features.length > 0 && <h3>features:</h3>}
              <ul>
                {formData.features.map((item, index) => (
                  <li key={index}>
                    {item}
                    <button onClick={() => handleDeleteFeaturesData(index)}>
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </ul>
        <p className={styles.manufacturer}>
          {mode === "view" || mode === "detail" ? (
            <> Price: $ {Number(item.price).toFixed(2)}</>
          ) : (
            <label>
              Price:{" "}
              <input
                name="price"
                type="number"
                value={formData.price || ""}
                onChange={handleInputChange}
                placeholder="Price"
              />
            </label>
          )}
        </p>
        <p>
          {mode === "view" || mode === "detail" ? (
            item.inStock ? (
              "Available"
            ) : (
              "Out of Stock"
            )
          ) : (
            <label>
              In Stock:{" "}
              <input
                name="inStock"
                type="checkbox"
                checked={formData.inStock || false}
                onChange={handleInputChange}
              />
            </label>
          )}
        </p>
        <div className={styles.buttonSection}>
          <p>
            {mode === "view" && <button onClick={onEditClick}>Edit</button>}
          </p>
          <p>
            {mode === "view" && <button onClick={onDetailClick}>Detail</button>}
          </p>
          <p>
            {mode === "edit" && (
              <button onClick={handleSave}>Save Changes</button>
            )}
          </p>
          <p>{mode === "add" && <button onClick={handleSave}>Save</button>}</p>
          <p>
            {(mode === "edit" || mode === "add" || mode === "detail") && (
              <button onClick={onBackClick}>Back</button>
            )}
          </p>
        </div>
      </>
    </div>
  );
}

export default Smartphone;