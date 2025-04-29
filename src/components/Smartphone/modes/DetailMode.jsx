import styles from "../SmartphoneStyles.module.css";

const DetailMode = ({ formData, onBackClick }) => {
  return (
    <>
      <div className={styles.buttonSection}>
        <button onClick={onBackClick}>Back</button>
      </div>
      <h2 className={styles.title}>{formData.name}</h2>
      <p className={styles.manufacturer}>{formData.manufacturer}</p>
      <ul className={styles.features}>
        {formData.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <p>
        <> price: $ {Number(formData.price).toFixed(2)}</>
      </p>
      <p>{formData.inStock ? "Available" : "Out of Stock"}</p>
    </>
  );
};
export default DetailMode;
