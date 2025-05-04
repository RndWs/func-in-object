
const useActionHandler = (
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
) => {
  // Define all action handlers in a single object
  const actionHandlers = {
    handleDetailClick: (item, modeBack = "view") => {
      console.log(`modeBack: ${modeBack}`);
      setSelectedItem(item);
      setMode("detail");
      setModeBack(modeBack);
    },
    handleEditClick: (item, modeBack = "view") => {
      setSelectedItem(item);
      setMode("edit");
      setModeBack(modeBack);
    },
    handleAddClick: () => {
      setSelectedItem(null);
      setMode("add");
    },
    handleBackClick: (item = null, modeBack = "view") => {
      console.log(`item: ${item}`);
      console.log(`modeBack: ${modeBack}`);

      setSelectedItem(item);
      setMode(modeBack);
    },
    handleAddItem: (newItem) => {
      setItems((prevItems) => [...prevItems, { id: Date.now(), ...newItem }]);
      setMode("view");
    },
    handleUpdateItem: (updatedItem, modeBack) => {
      console.log(`handleUpdateItem:->`);
      console.log(`updatedItem.id: ${updatedItem.id}`);

      console.log(`modeBack: ${modeBack}`);
      console.log(`items: ${JSON.stringify(items)}`);

      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        )
      );
      setSelectedItem(updatedItem);
      setMode(modeBack);
    },
    setSelectedType, // Allows dynamic type selection
    modeBack,
    setModeBack,
  };

  return { items, selectedItem, selectedType, mode, actionHandlers };
};

export default useActionHandler;

