import styles from "../../Laptop/LaptopStyles.module.css";

const ViewMode = ({ formData, onEditClick, onDetailClick }) => {

  console.log(JSON.stringify(formData));
  return (
    <>
      <div className={styles.buttonSection}>
        <button onClick={onEditClick}>Edit</button>
        <button onClick={onDetailClick}>Detail</button>
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
export default ViewMode;