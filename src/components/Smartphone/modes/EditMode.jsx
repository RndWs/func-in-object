
import styles from "../SmartphoneStyles.module.css";

const EditMode = ({ mode, formData, onChange, onSave, onBackClick }) => {

  return (
    <>
      <h2 className={styles.title}>
        <label>
          Name:{" "}
          <input
            name="name"
            value={formData.name || ""}
            onChange={onChange}
            placeholder="Name"
          />
        </label>
      </h2>
      <p>
        <label>
          Manufacturer:{" "}
          <input
            name="manufacturer"
            value={formData.manufacturer || ""}
            onChange={onChange}
            placeholder="Manufacturer"
          />
        </label>
      </p>

      <ul className={styles.features}>
        <>
          {formData.features.length > 0 && <h3>features:</h3>}
          <ul>
            {formData.features.map((feature, index) => (
              <li key={index}>
                <input
                  name="features"
                  type="text"
                  value={feature}
                  onChange={(e) => onChange(e, index, "update")}
                />
                <button
                  name="features"
                  onClick={(e) => onChange(e, index, "delete")}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <div>
            <label>
              <h4>add features</h4>
              <input
                name="features"
                type="text"
                placeholder="New feature"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && e.target.value.trim() !== "") {
                    onChange(e, null, "add");
                    e.target.value = ""; // Clear input field after adding
                  }
                }}
                style={{ padding: "10px", width: "80%", marginBottom: "10px" }}
              />
            </label>
          </div>
        </>
      </ul>

      <p>
        <label>
          Price:{" "}
          <input
            name="price"
            type="number"
            value={formData.price || ""}
            onChange={onChange}
            placeholder="Price"
          />
        </label>
      </p>
      <p>
        <label>
          In Stock:{" "}
          <input
            name="inStock"
            type="checkbox"
            checked={formData.inStock || false}
            onChange={onChange}
          />
        </label>
      </p>

      <button onClick={() => onSave(formData)}>
        {mode === "edit" ? "Save Changes" : "Save"}
      </button>
      <button onClick={onBackClick}>Back</button>
    </>
  );
};

export default EditMode;
