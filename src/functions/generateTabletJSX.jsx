
import styles from './css/Tablet.module.css'

function generateTabletJSX(item) {
  return (
    <div
      key={item.id}
      // style={{ border: "2px solid purple", margin: "10px", padding: "10px" }}
      className={styles.wrap}
    >
      <h2>{item.name}</h2>
      <p>Screen Size: {item.screenSize}</p>
      <p>Battery Life: {item.batteryLife}</p>
      <p>Price: ${Number(item.price).toFixed(2)}</p>
      <p>Status: {item.inStock ? "Available" : "Out of Stock"}</p>
    </div>
  );
}

export default generateTabletJSX;