import { useState } from "react";
import Item from "./Item";

export default function PakingList({
  items,
  onDeleteItem,
  onToggleHandle,
  clearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleHandle={onToggleHandle}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Select by input</option>
          <option value="description">Select by description</option>
          <option value="packed">Select by packed</option>
        </select>
      </div>
      <button onClick={clearList}>clear list</button>
    </div>
  );
}
