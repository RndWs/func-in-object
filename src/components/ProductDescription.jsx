
import styles from "./ProductStyles.module.css";

function ProductDescription({ description }) {
  return <p className={styles.description}>{description}</p>;
}

export default ProductDescription;