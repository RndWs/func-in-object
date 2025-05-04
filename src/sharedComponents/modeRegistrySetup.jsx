
import modeRegistry from "./modeRegistry";
import componentRegistry from "./componentRegistry";

modeRegistry.register(
  "view",
  ({ items, handleEditClick, handleDetailClick, handleAddClick }) => (
  <>
    {items.map((item) => {
      const Component = componentRegistry.getComponent(item.type);
      return (
        <Component
          key={item.id}
          item={item}
          mode="view"
          onEditClick={() => handleEditClick(item, "view")}
          onDetailClick={() => handleDetailClick(item, "view")} // Pass this callback
        />
      );
    })}
    <button onClick={handleAddClick}>Add New Item</button>
  </>
));

modeRegistry.register(
  "detail",
  ({ selectedItem, modeBack, handleEditClick, handleBackClick }) => {
    const Component = componentRegistry.getComponent(selectedItem.type);
    return (
      <div>
        <Component
          item={selectedItem}
          mode="detail"
          onEditClick={() => handleEditClick(selectedItem, "detail")}
          onBackClick={() => handleBackClick(modeBack)}
        />
      </div>
    );
  }
);


modeRegistry.register(
  "edit",
  ({ selectedItem, modeBack, handleUpdateItem, handleBackClick }) => {
    const Component = componentRegistry.getComponent(selectedItem.type);
    return (
      <div>
        <Component
          item={selectedItem}
          mode="edit"
          onSave={() => handleUpdateItem(selectedItem, modeBack)}
          onBackClick={() => handleBackClick(selectedItem, modeBack)}
        />
      </div>
    );
  }
);

modeRegistry.register(
  "add",
  ({ selectedType, handleAddItem, handleBackClick, setSelectedType }) => (
    <div>
      <h2>Add New Item</h2>
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        {Object.keys(componentRegistry.registry).map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      {(() => {
        const Component = componentRegistry.getComponent(selectedType);
        return (
          <Component
            item={null}
            mode="add"
            onSave={handleAddItem}
            onBackClick={handleBackClick}
          />
        );
      })()}
    </div>
  )
);
