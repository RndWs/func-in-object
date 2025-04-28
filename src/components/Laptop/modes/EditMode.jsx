
import styles from "../../Laptop/LaptopStyles.module.css";

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
          Descritption:{" "}
          <textarea
            name="description"
            value={formData.description || ""}
            onChange={onChange}
            placeholder="Description"
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

      <button onClick={()=>onSave(formData)}>
        {mode === "edit" ? "Save Changes" : "Save"}
      </button>
      <button onClick={onBackClick}>Back</button>
    </>
  );
};

export default EditMode;