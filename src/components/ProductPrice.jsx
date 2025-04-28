
import styles from "./ProductStyles.module.css";

function ProductPrice({ price, handlePriceClick }) {
  return (
    <p className={styles.price} onClick={() => handlePriceClick(price)}>
      Price: {price.toFixed(2)}
    </p>
  );
}

export default ProductPrice;
