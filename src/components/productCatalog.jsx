
import ProductCard from "./ProductCard.jsx";
import ProductTitle from "./ProductTitle.jsx";
import ProductDescription from "./ProductDescription.jsx";
import ProductPrice from "./ProductPrice.jsx";
import ProductStatus from "./ProductStatus.jsx";

import generateLaptopJSX from "../functions/generateLaptopJSX.jsx";
import generateSmartphoneJSX from "../functions/generateSmartphoneJSX.jsx";
import generateTabletJSX from "../functions/generateTabletJSX.jsx";

import {componentList} from "../sharedComponents/componentList.js";

import styles from "./ProductStyles.module.css";



const productCatalog = {
  category: "Electronics",
  items: [
    {
      id: 1,
      name: "Laptop",
      description: "A high-performance laptop for professionals.",
      price: 1299.99,
      inStock: true,
      type: "laptop",
    },
    {
      id: 2,
      name: "Smartphone",
      manufacturer: "TechCorp",
      features: ["5G", "OLED Display", "128GB Storage"],
      price: 799.99,
      inStock: false,
      type: "smartphone",
    },
    {
      id: 3,
      name: "Tablet",
      screenSize: "10.5 inches",
      batteryLife: "12 hours",
      price: 499.99,
      inStock: true,
      type: "tablet",
    },
  ],
  generateCategoryJSX(handlePriceClick, handleNameClick) {
    return (
      <div>
        <h1>Category: {this.category}</h1>
        {this.items.map((item) => {
          const itemConfig = componentList.find(
            (config) => config.type === item.type
          );
          if (itemConfig) {
            const Component = itemConfig.component;
            return (
              <Component
                key={item.id}
                item={item}
                handlePriceClick={handlePriceClick}
                handleNameClick={handleNameClick}
              />
            );
          }
          return null; // Fallback if type doesn't exist
        })}
      </div>
    );
  },
};

export default productCatalog;