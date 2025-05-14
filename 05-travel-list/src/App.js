import { useState } from "react";
import "./App.css";

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
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PakingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleHandle={handleToggleItem}
      />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h1>😎 Far Away ⛱️</h1>
    </div>
  );
}

function Form({ onAddItems }) {
  const [description, setDesctiption] = useState("");
  const [quantity, setQuantity] = useState(5);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDesctiption("");
    setQuantity(1);
  }
  return (
    <div className="add-form" onSubmit={handleSubmit}>
      <form>
        <h3>What do you need for your Trip 😍</h3>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {" "}
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item.."
          value={description}
          onChange={(e) => setDesctiption(e.target.value)}
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}
function PakingList({ items, onDeleteItem, onToggleHandle }) {
  return (
    <div className="list">
      {items.map((item) => (
        <Item
          item={item}
          key={item.id}
          onDeleteItem={onDeleteItem}
          onToggleHandle={onToggleHandle}
        />
      ))}
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleHandle }) {
  return (
    <li>
      <span>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onToggleHandle(item.id)}
        />
      </span>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>you have X items added on your list , and you have X(X%)</em>
    </footer>
  );
}
export default App;
