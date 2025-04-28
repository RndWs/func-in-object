
import styles from "./ProductStyles.module.css";

function ProductCard({ children }) {

  return (
    <div className={styles.card} >
      {children}
    </div>
  );
}

export default ProductCard;
