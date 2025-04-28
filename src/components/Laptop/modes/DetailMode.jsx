
import styles from "../../Laptop/LaptopStyles.module.css";

const DetailMode = ({ formData, onBackClick }) => {
  return (
    <>
      <div className={styles.buttonSection}>
        <button onClick={onBackClick}>Back</button>
      </div>
      <h2 className={styles.title}>{formData.name}</h2>
      <p>{formData.description}</p>
      <p>
        <> price: $ {Number(formData.price).toFixed(2)}</>
      </p>
      <p>{formData.inStock ? "Available" : "Out of Stock"}</p>
    </>
  );
};
export default DetailMode;