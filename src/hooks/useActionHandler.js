
const useActionHandler = (
  items,
  setItems,
  selectedItem,
  setSelectedItem,
  selectedItemBack,
  setSelectedItemBack,
  selectedType,
  setSelectedType,
  mode,
  setMode,
  modeBack,
  setModeBack
) => {
  // Define all action handlers in a single object
  const actionHandlers = {
    handleAddItem: (newItem) => {
      newItem.name !== "" && setItems((prevItems) => [
        ...prevItems,
        { id: Date.now(), ...newItem },
      ]);
      // setMode("view"); // <-
      setMode(modeBack[modeBack.length - 1]); // <-
      setModeBack((prevModeBack) => prevModeBack.slice(0, -1));
    },
    handleUpdateItem: (updatedItem) => {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        )
      );
      // setMode("view"); // <-
      setMode(modeBack[modeBack.length - 1]); // <-
      setModeBack((prevModeBack) => prevModeBack.slice(0, -1));
    },
    handleEditClick: (item) => {
      setSelectedItem(item);
      setSelectedItemBack(item);
      setMode("edit");
      setModeBack((prevModeBack) => [...prevModeBack, mode]); // <-
    },
    handleBackClick: () => {
      setSelectedItem(selectedItemBack);
      // setMode("view"); // <-
      setMode(modeBack[modeBack.length - 1]); // <-
      setModeBack((prevModeBack) => prevModeBack.slice(0, -1));
    },
    handleAddClick: () => {
      setSelectedItem(null);
      setMode("add");
      setModeBack((prevModeBack) => [...prevModeBack, mode]); // <-
    },
    handleDetailClick: (item) => {
      setSelectedItem(item);
      setMode("detail");
      setModeBack((prevModeBack) => [...prevModeBack, mode]); // <-
    },
    setSelectedType, // Allows dynamic type selection
  };

  return {
    items,
    selectedItem,
    selectedItemBack,
    selectedType,
    mode,
    modeBack,
    actionHandlers,
  };
};

export default useActionHandler;

