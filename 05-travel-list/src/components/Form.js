import { useState } from "react";
export default function Form({ onAddItems }) {
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
