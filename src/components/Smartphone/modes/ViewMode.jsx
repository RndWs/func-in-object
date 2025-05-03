
import styles from "../SmartphoneStyles.module.css";

const ViewMode = ({ formData, onEditClick, onDetailClick }) => {

  return (
    <>
      <div className={styles.buttonSection}>
        <button onClick={onEditClick}>Edit</button>
        <button onClick={onDetailClick}>Detail</button>
      </div>

      <h2 className={styles.title}>{formData.name}</h2>

      <p className={styles.manufacturer}>{formData.manufacturer}</p>

      <div className={styles.features}>
        <span>features:</span>
        <ul>
          {formData.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <p>
        <span>price: $</span>
        <span>{Number(formData.price).toFixed(2)}</span>
      </p>

      <p>{formData.inStock ? "Available" : "Out of Stock"}</p>
    </>
  );
};
export default ViewMode;