
import styles from "./css/Smartphone.module.css";

function generateSmartphoneJSX(item) {
  return (
    <div
      key={item.id}
      // style={{ border: "2px solid green", margin: "10px", padding: "10px" }}
      className={styles.wrap}
    >
      <h2>{item.name}</h2>
      <p>Manufacturer: {item.manufacturer}</p>
      <p>Features:</p>
      <ul>
        {item.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <p>Price: ${Number(item.price).toFixed(2)}</p>
      <p>Status: {item.inStock ? "Available" : "Out of Stock"}</p>
    </div>
  );
}

export default generateSmartphoneJSX;