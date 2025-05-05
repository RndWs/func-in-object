
import styles from "../../Laptop/LaptopStyles.module.css";

const EditMode = ({ mode, formData, onChange, onSave, onBackClick }) => {

  return (
    <>
      <p className={styles.title}>
        <label>
          Name:{" "}
          <input
            name="name"
            value={formData.name || ""}
            onChange={onChange}
            placeholder="Name"
            className={styles.input}
          />
        </label>
      </p>
      <p>
        <label>
          Descritption:{" "}
          <textarea
            name="description"
            value={formData.description || ""}
            onChange={onChange}
            placeholder="Description"
            className={styles.input}
          />
        </label>
      </p>
      <p>
        <label>
          Price:{" "}
          <input
            name="price"
            type="number"
            value={formData.price || ""}
            onChange={onChange}
            placeholder="Price"
            className={styles.input}
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
            className={styles.input}
          />
        </label>
      </p>

      <div className={styles.buttonSection}>
        {
          formData.name && formData.description && formData.price>0 &&<button onClick={() => onSave(formData)}>
            {mode === "edit" ? "Save Changes" : "Save"}
          </button>
        }
        <button onClick={onBackClick}>Back</button>
      </div>
    </>
  );
};

export default EditMode;