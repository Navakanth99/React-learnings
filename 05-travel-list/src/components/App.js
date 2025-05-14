import { useState } from "react";
import "./App.css";
import Logo from "./Logo";
import Form from "./Form";
import PakingList from "./PakingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 2, description: "Charger", quantity: 1, packed: false },
];
function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearList() {
    const confirmed = window.confirm("Are you sure. You want to delete all?");

    if (confirmed) return setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PakingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleHandle={handleToggleItem}
        clearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
