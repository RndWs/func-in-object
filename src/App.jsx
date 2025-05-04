
import { useState, useEffect } from "react";

import modeRegistry from "./sharedComponents/modeRegistry";
import "./sharedComponents/modeRegistrySetup";

import useActionHandler from "./hooks/useActionHandler";

import catalog from "./data/catalog";


function App() {
  const [items, setItems] = useState(catalog);

  const [mode, setMode] = useState("view"); // "view", "detail", "edit", or "add"
  const [modeBack, setModeBack] = useState("view"); // "view", "detail", "edit", or "add"
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedType, setSelectedType] = useState("laptop");
  
  const { actionHandlers } = useActionHandler(
    items,
    setItems,
    selectedItem,
    setSelectedItem,
    selectedType,
    setSelectedType,
    mode,
    setMode,
    modeBack,
    setModeBack
  );

  const renderMode = modeRegistry.getRenderFunction(mode);

  useEffect(() => {
    console.log(`mode: ${mode}`);
    console.log(`modeBack: ${modeBack}`);
  }, [mode, modeBack]);

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
