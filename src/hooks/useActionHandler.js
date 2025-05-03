
const useActionHandler = (
  items,
  setItems,
  selectedItem,
  setSelectedItem,
  selectedType,
  setSelectedType,
  mode,
  setMode
) => {
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

  return { items, selectedItem, selectedType, mode, actionHandlers };
};

export default useActionHandler;

