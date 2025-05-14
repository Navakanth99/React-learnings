import { useState } from "react";
import "./App.css";

const nodes = [
  {
    id: 1,
    name: "Electronics",
    checked: false,
    children: [
      {
        id: 2,
        name: "Mobile phones",
        checked: false,
        children: [
          {
            id: 3,
            name: "iPhone",
            checked: false,
          },
          {
            id: 4,
            name: "Android",
            checked: false,
          },
        ],
      },
      {
        id: 5,
        name: "Laptops",
        checked: false,
        children: [
          {
            id: 6,
            name: "MacBook",
            checked: false,
          },
          {
            id: 7,
            name: "Surface Pro",
            checked: false,
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Books",
    checked: false,
    children: [
      {
        id: 9,
        name: "Fiction",
        checked: false,
      },
      {
        id: 10,
        name: "Non-fiction",
        checked: false,
      },
    ],
  },
  {
    id: 11,
    name: "Toys",
    checked: false,
  },
];

const CheckBox = ({ data, checked, setChecked }) => {
  const handleChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };

      //if children are present, add all of them to new state

      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newState[child.id] = isChecked;
          child.children && updateChildren(child);
        });
      };
      updateChildren(node);

      const verfifyChecked = (node) => {
        if (!node.children) return newState[node.id] || false;

        const allChildrenChecked = node.children.every((child) =>
          verfifyChecked(child)
        );

        newState[node.id] = allChildrenChecked;
        return allChildrenChecked;
      };

      nodes.forEach((node) => verfifyChecked(node));

      return newState;
    });
  };
  return (
    <div>
      {data.map((node) => (
        <div className="parent" key={node.id}>
          <input
            type="checkbox"
            checked={checked[node.id] || false}
            onChange={(e) => handleChange(e.target.checked, node)}
          />
          <span>{node.name}</span>
          {node?.children && (
            <CheckBox
              data={node.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};
function App() {
  const [checked, setChecked] = useState({ 1: true, 7: true });
  return (
    <div className="App">
      <h1>Nested CheckBox</h1>
      <CheckBox data={nodes} checked={checked} setChecked={setChecked} />
    </div>
  );
}

export default App;
