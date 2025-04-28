
import styles from "./css/Laptop.module.css";

function generateLaptopJSX(item) {
  return (
    <div
      key={item.id}
      // style={{ border: "2px solid blue", margin: "10px", padding: "10px" }}
      className={styles.wrap}
    >
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Price: ${Number(item.price).toFixed(2)}</p>
      <p>Status: {item.inStock ? "Available" : "Out of Stock"}</p>
    </div>
  );
}
export default generateLaptopJSX