
import { useState } from "react";

import modeRegistry from "./sharedComponents/modeRegistry";
import "./sharedComponents/modeRegistrySetup";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      type: "laptop",
      name: "Laptop",
      description: "High-performance laptop.",
      price: 1299.99,
      inStock: true,
    },
    {
      id: 2,
      type: "smartphone",
      name: "Smartphone",
      manufacturer: "TechCorp",
      features: ["5G", "OLED Display"],
      price: 799.99,
      inStock: false,
    },
    {
      id: 3,
      type: "tablet",
      name: "Tablet",
      screenSize: "10.5 inches",
      batteryLife: "12 hours",
      price: 499.99,
      inStock: true,
    },
  ]);

  const [mode, setMode] = useState("view"); // "view", "edit", or "add"
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedType, setSelectedType] = useState("laptop");

  // Define all action handlers in a single object
  const actionHandlers = {
    handleAddItem: (newItem) => {
      setItems((prevItems) => [...prevItems, { id: Date.now(), ...newItem }]);
      setMode("view");
    },
    handleUpdateItem: (updatedItem) => {
      console.log(`handleUpdateItem:->`);
      console.log(`updatedItem.id: ${updatedItem.id}`);

      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        )
      );
      setMode("view");
    },
    handleEditClick: (item) => {
      setSelectedItem(item);
      setMode("edit");
    },
    handleBackClick: () => {
      setSelectedItem(null);
      setMode("view");
    },
    handleAddClick: () => {
      setSelectedItem(null);
      setMode("add");
    },
    handleDetailClick: (item) => {
      setSelectedItem(item);
      setMode("detail");
    },
    setSelectedType, // Allows dynamic type selection
  };

  const renderMode = modeRegistry.getRenderFunction(mode);

  return (
    <div>
      <h1>Product Catalog</h1>
      {renderMode &&
        renderMode({
          items,
          selectedItem,
          selectedType,
          ...actionHandlers, // Pass all handlers dynamically
        })}
    </div>
  );
}

export default App;
