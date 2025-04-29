
import styles from "../SmartphoneStyles.module.css";

const ViewMode = ({ formData, onEditClick, onDetailClick }) => {

  console.log(JSON.stringify(formData));
  return (
    <>
      <div className={styles.buttonSection}>
        <button onClick={onEditClick}>Edit</button>
        <button onClick={onDetailClick}>Detail</button>
      </div>
      <h2 className={styles.title}>{formData.name}</h2>
      <p className={styles.manufacturer}>{formData.manufacturer}</p>

      <ul className={styles.features}>
        {formData.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <p>
        <> Price: $ {Number(formData.price).toFixed(2)}</>
      </p>
      <p>{formData.inStock ? "Available" : "Out of Stock"}</p>
    </>
  );
};
export default ViewMode;