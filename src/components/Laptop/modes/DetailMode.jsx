
import styles from "../LaptopStyles.module.css";

const DetailMode = ({ modeBack, formData, onEditClick, onBackClick }) => {
  
  console.log(`modeBack: ${modeBack}`)
  return (
    <>
      <div className={styles.buttonSection}>
        <button onClick={() => onEditClick(formData, "detail")}>Edit</button>
        <button onClick={() => onBackClick(formData, "view")}>Back</button>
      </div>
      <h2 className={styles.title}>{formData.name}</h2>
      <p>{formData.description}</p>
      <p>
        <> Price: $ {Number(formData.price).toFixed(2)}</>
      </p>
      <p>{formData.inStock ? "Available" : "Out of Stock"}</p>
    </>
  );
};
export default DetailMode;