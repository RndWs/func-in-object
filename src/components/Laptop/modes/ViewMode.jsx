
import styles from "../../Laptop/LaptopStyles.module.css";

const ViewMode = ({ formData, onEditClick, onDetailClick }) => {

  return (
    <>
      <div className={styles.buttonSection}>
        <button onClick={onEditClick}>Edit</button>
        <button onClick={()=>onDetailClick(formData, "detail")}>Detail</button>
      </div>
      <h2 className={styles.title}>
        {formData.name}
      </h2>
      <p>{formData.description}</p>
      <p>
        <> Price: $ {Number(formData.price).toFixed(2)}</>
      </p>
      <p>{formData.inStock ? "Available" : "Out of Stock"}</p>
    </>
  );
};
export default ViewMode;