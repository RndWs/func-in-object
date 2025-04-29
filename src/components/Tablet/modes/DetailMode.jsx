
import styles from "../TabletStyles.module.css";

const DetailMode = ({ formData, onBackClick }) => {
  return (
    <>
      <div className={styles.buttonSection}>
        <button onClick={onBackClick}>Back</button>
      </div>
      <h2 className={styles.title}>{formData.name}</h2>
      <p className={styles.screenSize}>{formData.screenSize}</p>
      <p className={styles.batteryLife}>{formData.batteryLife}</p>
      <p>
        <> Price: $ {Number(formData.price).toFixed(2)}</>
      </p>
      <p>{formData.inStock ? "Available" : "Out of Stock"}</p>
    </>
  );
};
export default DetailMode;