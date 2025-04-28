
import styles from "./ProductStyles.module.css";

function ProductStatus({ inStock }) {
  return <p className={styles.inStock}>
    Status: {inStock ? "Available" : "Out of Stock"}
  </p>;
};

export default ProductStatus;
